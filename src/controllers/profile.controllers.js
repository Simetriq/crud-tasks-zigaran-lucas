import ProfileModel from "../models/profile.model.js";
import UserModel from "../models/user.model.js";

export const post_profile = async (req, res) => {
  try {
    const { user_id } = req.body;

    if (!user_id)
      return res.status(400).json({ message: "El user_id no debe ser vacio" });

    const CrearUnPerfil = await ProfileModel.create(req.body);
    return res.status(200).json(CrearUnPerfil);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de crear un perfil" });
  }
};
export const get_profile = async (req, res) => {
  try {
    const findProfileById = await ProfileModel.findById(req.params.id);
    return res.status(200).json(findProfileById);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de traer un perfil" });
  }
};

export const getAll = async (req, res) => {
  try {
    const traerTodo = await ProfileModel.findAll({
      attributes: { exclude: ["user_id"] },
      include: [{ model: UserModel, attributes: { exclude: ["password"] } }],
    });
    return res.status(200).json(traerTodo);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de traer un perfil" });
  }
};
