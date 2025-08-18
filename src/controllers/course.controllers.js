import courseModel from "../models/course.model.js";
import { Op } from "sequelize";

export const post_course = async (req, res) => {
  try {
    const CrearUnCurso = await courseModel.create(req.body);
    return res.status(200).json(CrearUnCurso);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de crear un curso" });
  }
};
export const getUserCourse = async (req, res) => {
  try {
    const findAllCourses = await courseModel.findAll();
    return res.status(302).json(findAllCourses);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de traer un curso" });
  }
};
