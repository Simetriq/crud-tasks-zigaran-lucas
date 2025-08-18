import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import UserModel from "./user.model.js";
import course_model from "./course.model.js";

const courseUserModel = sequelize.define(
  "Course",
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

export default courseUserModel;

//! esta es la tabla intermedia en donde se debe realizar la relacion

UserModel.BelongsToMany(course_model, {
  through: `courseUserModel`,
  foreignKey: "course_user_id",
  as: "user_id",
});

course_model.BelongsToMany(UserModel, {
  through: `courseUserModel`,
  foreignKey: "user_id",
  as: "course_id",
});
