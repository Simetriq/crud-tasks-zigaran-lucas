import ProfileModel from "../models/profile.model.js";

export const post_profile = async (req, res) => {
  try {
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
