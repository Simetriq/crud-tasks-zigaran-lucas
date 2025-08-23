import CourseModel from "../models/course.model.js";
import { Op, where } from "sequelize";

export const PostCourse = async (req, res) => {
  try {
    const CreateCourse = await CourseModel.create(req.body);
    return res.status(200).json(CreateCourse);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de crear un curso" });
  }
};
export const GetCourse = async (req, res) => {
  try {
    const findAllCourses = await CourseModel.findAll();
    return res.status(302).json(findAllCourses);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de traer un curso" });
  }
};
export const getCourseById = async (req, res) => {
  try {
    const getById = await CourseModel.findByPk(req.params.id);
    return res.status(302).json(getCourseById);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de traer un curso por id" });
  }
};
export const updateCourse = async (req, res) => {
  try {
    const courseUpdate = courseUpdate.updateCourse(req.body, {
      where: { id: req.params.id },
    });
    const userActualizado = await CourseModel.findByPk(req.params.id);
    if (userActualizado)
      return res
        .status(200)
        .json({ message: "se a actualizado el usuario correctamente" });
    else {
      return res
        .status(400)
        .json({ message: "Error al tratar de actualizar un usuario" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: "error en la peticion de actualizacion de user" });
  }
};
