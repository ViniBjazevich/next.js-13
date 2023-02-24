// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Todo } from "@/database/postgres/schemas/todo";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    /*
      User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
      User.sync({ force: true }) - This creates the table, dropping it first if it already existed
      User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
    */
    await Todo.sync();

    switch (req.method) {
      case "POST":
        const todoName = "Clean dishes";
        // Create is the same as running build and save command
        // await Todo.create({ name: "Take out trash" });
        const todo = Todo.build({ name: todoName });
        await todo.save();

        res.status(200).json(`${todoName} successfully added to database`);
        break;
      case "GET":
        const allTodos = await Todo.findAll();

        res.status(200).json(allTodos);
      default:
        break;
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(`Internal Server Error: ${error}`);
  }
}
