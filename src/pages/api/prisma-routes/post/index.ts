import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const { authorId, content } = req.body;

    switch (req.method) {
      case "POST":
        const post = await prisma.post.create({
          data: {
            content,
            authorId,
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
      default:
        res.status(400).json("Bad Request");
        break;
    }
  } catch (error) {
    console.error(error);
  }

  await prisma.$disconnect();
}
