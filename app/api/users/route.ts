// In a page file, e.g., `pages/users.tsx`
import prisma from "@/prisma/client";

export async function getServerSideProps() {
  const users = await prisma.user.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return {
    props: { users },
  };
};