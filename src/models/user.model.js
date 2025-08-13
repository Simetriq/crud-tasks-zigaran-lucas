import sequelize from "../config/database.js";
import { DataTypes, ForeignKeyConstraintError, Op } from "sequelize";
import TaskModel from "./task.model.js";

const UserModel = sequelize.define("Users", {
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

UserModel.hasMany(TaskModel, { ForeignKey: "userId" });

TaskModel.belongsTo(UserModel, { ForeignKey: "userId" });
