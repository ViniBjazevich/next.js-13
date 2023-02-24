import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const request = req.method;
    if (request === "GET") {
      const allChatRooms = await prisma.chatRoom.findMany({
        include: {
          users: true,
          messages: true,
        },
      });

      res.status(200).json(allChatRooms);
    } else if (request === "POST") {
      const { name, userId } = req.body;

      const chatRoom = await prisma.chatRoom.create({
        data: {
          name,
          users: {
            connect: {
              id: userId,
            },
          },
        },
        include: {
          users: true,
          messages: true,
        },
      });

      res.status(200).json(chatRoom);
    } else if (request === "PUT") {
      const { chatRoomId, userId } = req.body;

      const chatRoom = await prisma.chatRoom.update({
        where: {
          id: chatRoomId,
        },
        data: {
          users: {
            connect: {
              id: userId,
            },
          },
        },
        include: {
          users: true,
          messages: true,
        },
      });

      res.status(200).json(chatRoom);
    } else {
      res.status(400).json("Bad Request");
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
    console.error(error);
  }

  await prisma.$disconnect();
}
