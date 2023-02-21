import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.query;

  try {
    switch (req.method) {
      case "GET":
        if (typeof id !== "string") {
          res.status(400).json("Invalid Request");
          break;
        }
        const post = await prisma.post.findUnique({
          where: {
            id: parseInt(id),
          },
          include: {
            likedBy: true,
            author: true,
          },
        });

        res.status(200).json(post);
        break;

      case "PUT":
        const updatedPost = await prisma.post.update({
          where: {
            id: 1,
          },
          data: {
            likedBy: {
              connect: {
                id: "cledzi70500009kyjw78oha37",
              },
            },
          },
        });

        res.status(200).json(updatedPost);
        break;
      default:
        break;
    }
  } catch (error) {
    console.error(error);
  }

  await prisma.$disconnect();
}
