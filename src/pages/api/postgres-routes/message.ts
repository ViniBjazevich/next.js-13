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
        const { content, chatRoomId, userId } = req.body;

        const message = await prisma.message.create({
          data: {
            userId,
            chatRoomId,
            content,
          },
          include: {
            chatRoom: true,
            sender: true,
          },
        });

        res.status(200).json(message);
        break;
      case "GET":
        const allMessages = await prisma.message.findMany({
          include: {
            chatRoom: true,
            sender: true,
          },
        });

        res.status(200).json(allMessages);
        break;
      default:
        res.status(400).json("Bad Request");
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
    console.error(error);
  }

  await prisma.$disconnect();
}
