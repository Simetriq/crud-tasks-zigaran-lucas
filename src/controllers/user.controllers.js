import UserModel from "../models/user.model.js";
import sequelize from "sequelize";

export const postUser = async (req, res) => {
  try {
    const crearUnUsuario = await UserModel.create(req.body);
    return res.status(200).json(crearUnUsuario);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de crear un usuario" });
  }
};
export const getAllUser = async (req, res) => {
  try {
    const traerTodasLosUsuarios = await UserModel.findAll();
    return res.status(302).json(traerTodasLosUsuarios);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de traer todos los usuarios" });
  }
};
export const getUserId = async (req, res) => {
  try {
    const findUserId = UserModel.findByPk(req.params.id);
    return res.status(302).json(findUserId);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de traer un usuario por id" });
  }
};
export const putUser = async (req, res) => {
  try {
    const [updateTaskById] = await TaskModel.update(req.body, {
      where: { id: req.params.id },
    });

    if (updateTaskById) {
      const taskActualizado = await TaskModel.findById(req.params.id);
      return res
        .status(200)
        .json({ message: `Se actualizo exitosamente el usuario` });
    } else {
      return res.status(404).json({
        message: `No se encontro el usuario que se quiere actualizar`,
      });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de actualizar un usuario" });
  }
};
export const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de borrar un usuario" });
  }
};
