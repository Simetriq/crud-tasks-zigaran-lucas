import CourseModel from "../models/course.model.js";
import UserModel from "../models/user.model.js";
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
    const findAllUserCourses = await courseUserModel.findAll({
      attributes: { exclude: ["user_model_id", "course_model_id"] },
      include: [
        {
          model: CourseModel,
        },
        {
          model: UserModel,
        },
      ],
    });
    return res.status(200).json(findAllUserCourses);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "error al tratar de traer los cursos y usuarios" });
  }
};
