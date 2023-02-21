import { Schema, model, models, connection as db } from "mongoose";

interface TodoType {
  name: string;
  completed?: boolean;
}

const todoSchema = new Schema<TodoType>({
  name: { type: String, required: true },
  completed: { type: Boolean, required: true, default: false },
});

export const TodosModel = models.Todos || model("Todos", todoSchema);
