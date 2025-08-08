import UserModel from "../models/user.model.js";
import sequelize from "sequelize";

export const postUser = async (req, res) => {
  if (req.body) {
    for (let value in req.body) {
      if (typeof req.body[value] === "string") {
        req.body[value] = req.body[value].trim();
      }
    }
  }

  try {
    const { name, email, password } = req.body;
    const emailUnico = await UserModel.findOne({ where: { name } });
    if (emailUnico)
      return res.status(400).json({ message: "este email ya esta registrado" });

    if (name === undefined || name === "" || name === null)
      return res.status(400).json({ message: "name no debe estar vacio" });
    if (email === undefined || email === "")
      return res.status(400).json({ message: "email no debe estar vacio" });
    if (password === undefined || password === "")
      return res.status(400).json({ message: "password no debe estar vacio" });
    if (name.length > 100)
      return res
        .status(400)
        .json({ message: "el nombre no debe ser mayor a 100 caracteres" });
    if (email.length > 100)
      return res
        .status(400)
        .json({ message: "el email no debe ser mayor a 100 caracteres" });
    if (password.length > 100)
      return res
        .status(400)
        .json({ message: "la contraseña no debe ser mayor a 100 caracteres" });

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
    const emailUnico = await UserModel.findOne({
      where: { email: email, id: { [Op.ne]: req.params.id } },
    });
    if (emailUnico)
      return res.status(400).json({ message: "este email ya esta registrado" });
    const [updateUserById] = await TaskModel.update(req.body, {
      where: { id: req.params.id },
    });

    if (updateUserById) {
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
