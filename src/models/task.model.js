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
//! debes definir la relación en ambos modelos para que Sequelize
//! funcione correctamente, pero cada declaración tiene un propósito distinto
//? one to many la relacion va en el modelo de Many, ejemplo user y task
//? la relacion va en task, asi evitamos que se repita el user en la base de datos.

TaskModel.belongsTo(UserModel, { foreignKey: "user_id", as: "user" });

UserModel.hasMany(TaskModel, { foreignKey: "user_id", as: "tasks" });
