import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import UserModel from "./user.model.js";
import CourseModel from "./course.model.js";

const CourseUserModel = sequelize.define(
  "UserCourses",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default CourseUserModel;

//! esta es la tabla intermedia en donde se debe realizar la relacion

UserModel.belongsToMany(CourseModel, {
  through: CourseUserModel,
  foreignKey: "user_id",
  as: "roles",
});

CourseModel.belongsToMany(UserModel, {
  through: CourseUserModel,
  foreignKey: "role_id",
  as: "users",
});
