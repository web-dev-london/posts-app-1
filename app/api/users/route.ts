/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest) {
  const users = await prisma.user.findMany({
    orderBy: {
      name: 'asc'
    }
  });

  return NextResponse.json(users);
}