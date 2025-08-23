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
    const getAllUserCourse = await courseUserModel.findAll({
      attributes: { exclude: ["user_model_id", "course_model_id"] },
      include: [
        {
          model: CourseModel,
          as: "course",
        },
        {
          model: UserModel,
          as: "user",
        },
      ],
    });
    return res.status(200).json(getAllUserCourse);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "error al tratar de traer los cursos y usuarios" });
  }
};
export const getUserCourseById = async (req, res) => {
  try {
    const findUserCourseById = await courseUserModel.findByPk(req.params.id, {
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
    return res.status(200).json(findUserCourseById);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "error al tratar de buscar un curso por id" });
  }
};
export const deleteUserCourse = async (req, res) => {
  try {
    const deleteUserCourseById = await courseUserModel.destroy({
      where: { id: req.params.id },
    });
    if (deleteUserCourseById)
      return res
        .status(200)
        .json({ message: "El curso del usuario se a eliminado correctamente" });
    else {
      return res
        .status(400)
        .json({ message: "Error al tratar de eliminar un curso del usuario" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de eliminar un curso del usuario" });
  }
};
export const updateUserCourse = async (req, res) => {
  try {
    const [updateUserCourseById] = await courseUserModel.update(req.body, {
      where: { id: req.params.id },
    });

    if (updateUserCourseById) {
      const userCourseActualizado = await courseUserModel.findByPk(
        req.params.id
      );
      return res.status(200).json(userCourseActualizado);
    } else {
      return res.status(404).json({
        message: `No se encontro el curso del usuario que se quiere actualizar`,
      });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de actualizar un curso del usuario" });
  }
};
