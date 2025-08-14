import sequelize from "../config/database.js";
import { DataTypes, ForeignKeyConstraintError, Op } from "sequelize";

const course_model = sequelize.define("Course", {
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

export default course_model;

//! relacion de muchos a muchos, muchos cursos tienen varios usuarios y los usuarios
//! tienen varios cursos, se necesita una tabla intermedia, entre usuario y cursos,
//? LA RELACION VA EN LA TABLA INTERMEDIA
