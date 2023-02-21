import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    switch (req.method) {
      case "POST":
        const user = await prisma.user.create({
          data: {
            handle: "645Grader",
            username: "Reza Can't Code",
            email: "reza@gmail.com",
          },
          include: {
            followers: true,
            following: true,
            likes: true,
            posts: true,
          },
        });

        res.status(200).json(user);
        break;
      case "GET":
        const users = await prisma.user.findMany({
          include: {
            followers: true,
            following: true,
            posts: true,
            likes: true,
          },
        });

        res.status(200).json(users);
      default:
        break;
    }
  } catch (error) {
    console.error(error);
  }

  await prisma.$disconnect();
}
