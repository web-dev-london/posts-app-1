/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest, response: NextResponse) {
  const databaseUrl = process.env.DATABASE_URL; // Accessing your environment variable


  if (!databaseUrl) {
    return NextResponse.json({ error: 'Database URL not found' }, { status: 500 });
  }

  try {
    const users = await prisma.user.findMany({
      orderBy: {
        name: 'asc'
      }
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error fetching users' }, { status: 500 });
  }

  // const users = await prisma.user.findMany({
  //   orderBy: {
  //     name: 'asc'
  //   }
  // });

  // return NextResponse.json(users);
}