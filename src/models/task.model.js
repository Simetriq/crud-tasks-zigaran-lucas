import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import UserModel from "./user.model.js";

const TaskModel = sequelize.define(
  "Tasks",
  {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_complete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
);
export default TaskModel;

//!Relaciones de uno a muchos

TaskModel.belongsTo(UserModel, { foreignKey: "user_id", as: "user" });

UserModel.hasMany(TaskModel, { foreignKey: "user_id", as: "tasks" });
