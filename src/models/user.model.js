import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const UserModel = sequelize.define("tasks_users_db", {
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
});

export default UserModel;
