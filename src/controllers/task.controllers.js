import TaskModel from "../models/task.model.js";

export const postTask = async (req, res) => {
  try {
    const validateTask = [
      body("title")
        .notEmpty()
        .withMessage("El título es obligatorio")
        .isLength({ max: 100 })
        .withMessage("Máximo 100 caracteres")
        .trim(),
    ];
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de traer todos los lenguajes" });
  }
};
export const getAllTask = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de traer todos los lenguajes" });
  }
};
export const getTaskporId = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de traer todos los lenguajes" });
  }
};
export const updateTask = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de traer todos los lenguajes" });
  }
};
export const deleteTask = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de traer todos los lenguajes" });
  }
};
