import ProfileModel from "../models/profile.model.js";
import TaskModel from "../models/task.model.js";
import UserModel from "../models/user.model.js";

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
    const emailUnico = await UserModel.findOne({ where: { email } });
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
export const GetAllUsers = async (req, res) => {
  try {
    const GetUsers = await UserModel.findAll({
      attributes: { exclude: ["password"] },
      include: [
        {
          model: TaskModel,
          as: "tasks",
        },
        {
          model: ProfileModel,
          as: "profile",
        },
      ],
    });
    return res.status(200).json(GetUsers);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de traer todos los usuarios" });
  }
};
export const getUserId = async (req, res) => {
  try {
    const findUserId = await UserModel.findByPk(req.params.id, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: TaskModel,
          attributes: { exclude: ["user_id", "id"] },
        },
        {
          model: ProfileModel,
        },
      ],
    });
    return res.status(200).json(findUserId);
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
      return res.status(200).json(taskActualizado);
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
    const deleteUser = await UserModel.destroy({
      where: { id: req.params.id },
    });
    if (deleteUser) {
      return res
        .status(200)
        .json({ message: `Se elimino exitosamente el usuario` });
    } else {
      return res.status(404).json({
        message: `No se encontro el usuario que se quiere eliminar`,
      });
    }

    return res
      .status(400)
      .json({ message: "Error al tratar de borrar un usuario" });
  }
};
