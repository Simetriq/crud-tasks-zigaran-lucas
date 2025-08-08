import UserModel from "../models/user.model.js";

export const postUser = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de traer todos los lenguajes" });
  }
};
export const getAllUser = async (req, res) => {
  try {
    const traerTodasLosUsuarios = await UserModel.findAll();
    return res.status(302).json(traerTodasLosUsuarios);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de traer todos los lenguajes" });
  }
};
export const getUserId = async (req, res) => {
  try {
    const findUserId = UserModel.findByPk(req.params.id);
    return res.status(302).json(findUserId);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de traer todos los lenguajes" });
  }
};
export const putUser = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de traer todos los lenguajes" });
  }
};
export const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de traer todos los lenguajes" });
  }
};
