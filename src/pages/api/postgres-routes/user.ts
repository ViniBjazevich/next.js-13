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
        const { handle, username, email } = req.body;
        const user = await prisma.user.create({
          data: {
            handle,
            username,
            email,
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
          select: {
            id: true,
            handle: true,
            email: true,
            username: true,
            followers: {
              select: {
                follower: true,
              },
            },
            following: {
              select: {
                leader: true,
              },
            },
            posts: true,
            likes: true,
            chatRooms: true,
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
