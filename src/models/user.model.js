import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const UserModel = sequelize.define(
  "user",
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
    paranoid: true,
    createdAt: false,
    updatedAt: false,
  }
);

export default UserModel;
