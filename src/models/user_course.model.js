import sequelize from "../config/database.js";
import { DataTypes, ForeignKeyConstraintError, Op } from "sequelize";
import UserModel from "./user.model.js";

const course_user_model = sequelize.define("Course", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  rol: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
  },
});

export default course_user_model;

//! esta es la tabla intermedia en donde se debe realizar la relacion

course_user_model.BelongsToMany(UserModel, {
  foreignKey: "course_user_id",
  as: "course_user",
});

UserModel.BelongsToMany(course_user_model, {
  foreignKey: "user_id",
  as: "user",
});
