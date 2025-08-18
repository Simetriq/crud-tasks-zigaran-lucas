import sequelize from "../config/database.js";
import { DataTypes, ForeignKeyConstraintError, Op } from "sequelize";

const course_model = sequelize.define(
  "Course",
  {
    course: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    year: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default course_model;

//! relacion de muchos a muchos, muchos cursos tienen varios usuarios y los usuarios
//! tienen varios cursos, se necesita una tabla intermedia, entre usuario y cursos,
//? LA RELACION VA EN LA TABLA INTERMEDIA
