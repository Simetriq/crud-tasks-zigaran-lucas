import courseUserModel from "../models/user_course.model.js";

export const postUserCourse = async (req, res) => {
  try {
    const postUserCourse = await courseUserModel.create(req.body);
    return res.status(200).json(postUserCourse);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "error al tratar de ejecutar postUserCourse" });
  }
};

export const getAllUserCourse = async (req, res) => {
  try {
    const findAllUserCourses = await courseUserModel.findAll();
    return res.status(302).json(findAllUserCourses);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "error al tratar de traer los cursos y usuarios" });
  }
};
