// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase, closeDatabaseConnection } from "@/database";
// import { connectToDatabase } from "../../database/index";
import type { NextApiRequest, NextApiResponse } from "next";
import { TodosModel } from "../../database/schemas/todo";

// type Data = {
//   name: string;
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<String>
) {
  console.log("Hit endpoint");
  await connectToDatabase();
  console.log("created connection");
  const todoName = "Clean dishes";
  const todo = new TodosModel({ name: todoName });
  await todo.save();
  closeDatabaseConnection();

  res.status(200).json(`${todoName} successfully added to database`);
}
