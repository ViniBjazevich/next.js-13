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
        const post = await prisma.post.create({
          data: {
            title: "My first post!",
            authorId: "cledzrdhs00029kyjuv72vo4q",
          },
          include: {
            likedBy: true,
            author: true,
          },
        });

        res.status(200).json(post);
        break;
      case "GET":
        const allPost = await prisma.post.findMany({
          include: {
            likedBy: true,
            author: true,
          },
        });

        res.status(200).json(allPost);
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
