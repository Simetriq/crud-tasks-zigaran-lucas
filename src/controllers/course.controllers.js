import CourseModel from "../models/course.model.js";

export const PostCourse = async (req, res) => {
  try {
    const CrearUnCurso = await CourseModel.create(req.body);
    return res.status(200).json(CrearUnCurso);
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
