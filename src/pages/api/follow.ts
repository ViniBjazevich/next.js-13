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
        const follow = await prisma.follow.create({
          data: {
            leaderId: "cledzi70500009kyjw78oha37",
            followerId: "cledzrdhs00029kyjuv72vo4q",
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
      default:
        break;
    }
  } catch (error) {
    console.error(error);
  }

  await prisma.$disconnect();
}
