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
        const { leaderId, followerId } = req.body;
        
        const follow = await prisma.follow.create({
          data: {
            leaderId,
            followerId,
          },
          include: {
            leader: true,
            follower: true,
          },
        });

        res.status(200).json(follow);
        break;
      case "GET":
        const allFollows = await prisma.follow.findMany();

        res.status(200).json(allFollows);
        break;
      default:
        res.status(400).json("Bad Request");
    }
  } catch (error) {
    console.error(error);
  }

  await prisma.$disconnect();
}
