import sequelize from "../config/database.js";
import { DataTypes, ForeignKeyConstraintError, Op } from "sequelize";
// import TaskModel from "./task.model.js";

const UserModel = sequelize.define(
  "Users",
  {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default UserModel;

//! debes definir la relación en ambos modelos para que Sequelize
//! funcione correctamente, pero cada declaración tiene un propósito distinto

// UserModel.hasMany(TaskModel, { ForeignKey: "userId" });

// TaskModel.belongsTo(UserModel, { ForeignKey: "userId" });
