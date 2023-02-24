import { DataTypes } from "sequelize";
import db from "../index";

export const Todo = db.define(
  "Todo",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    // freezeTableName: true,
  }
);
