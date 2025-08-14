import course_model from "../models/course.model.js";
import { Op } from "sequelize";

export const post_course = async (req, res) => {
  try {
    const CrearUnCurso = await course_model.create(req.body);
    return res.status(200).json(CrearUnCurso);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de crear un curso" });
  }
};
export const get_course = async (req, res) => {
  try {
    const findCourseById = await course_model.findById(req.params.id);
    return res.status(200).json(findCourseById);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de traer un curso" });
  }
};
