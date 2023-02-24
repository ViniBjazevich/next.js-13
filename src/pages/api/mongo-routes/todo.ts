// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase, closeDatabaseConnection } from "@/database/mongo";
import type { NextApiRequest, NextApiResponse } from "next";
import { TodosModel } from "../../../database/mongo/schemas/todo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log("start");
  await connectToDatabase();
  console.log("connected");

  switch (req.method) {
    case "POST":
      const todoName = "Clean dishes";
      const todo = new TodosModel({ name: todoName });
      await todo.save();

      res.status(200).json(`${todoName} successfully added to database`);
      break;
    case "GET":
      const allTodos = await TodosModel.find();

      res.status(200).json(allTodos);
    default:
      break;
  }

  closeDatabaseConnection();
}
