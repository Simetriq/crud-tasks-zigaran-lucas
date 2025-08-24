import CourseModel from "../models/course.model.js";
import sequelize from "sequelize";

export const PostCourse = async (req, res) => {
  try {
    const { course, year } = req.params;
    if (course) return res.status(400).json({ message: `el curso ya existe` });
    if (year) return res.status(400).json({ message: "Este año ya existe " });
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
export const deleteUser = async (req, res) => {
  try {
    const deleteUserById = await UserModel.destroy({
      where: { id: req.params.id },
    });
    if (deleteUserById)
      return res
        .status(200)
        .json({ message: "se a eliminado el usuario correctamente" });
    else {
      return res
        .status(404)
        .json({ message: "No se encontro el usuario que se quiere eliminar" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de eliminar un usuario" });
  }
};
