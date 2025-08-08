import sequelize from "sequelize";
import TaskModel from "../models/task.model.js";

export const postTask = async (req, res) => {
  try {
    const validacionDeTask = [
      body("title")
        .notEmpty()
        .withMessage("El título es obligatorio y no debe ser vacio")
        .isLength({ max: 100 })
        .withMessage("Máximo 100 caracteres")
        .trim(),
    ];

    const CrearUnaTarea = await TaskModel.create(req.body);
    return res.status(200).json(CrearUnaTarea);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de crear una tarea" });
  }
};
export const getAllTask = async (req, res) => {
  try {
    const traerTodasLasTareas = await TaskModel.findAll();
    return res.status(302).json(traerTodasLasTareas);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de traer todas las tareas" });
  }
};
export const getTaskporId = async (req, res) => {
  try {
    const findTaskById = await TaskModel.findTaskById(req.params.id);
    return res.status(200).json(findTaskById);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de buscar una tarea por id" });
  }
};
export const updateTask = async (req, res) => {
  try {
    const [updateTaskById] = await TaskModel.update(req.body, {
      where: { id: req.params.id },
    });

    if (updateTaskById) {
      const taskActualizado = await TaskModel.findById(req.params.id);
      return res
        .status(200)
        .json({ message: `Se actualizo exitosamente la tarea` });
    } else {
      return res
        .status(404)
        .json({ message: `No se encontro la tarea que se quiere actualizar` });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de actualizar una tarea" });
  }
};
export const deleteTask = async (req, res) => {
  try {
    const deleteTaksById = await TaskModel.destroy({
      where: { id: req.params.id },
    });
    return res.status(200).json({ message: "Se borro exitosamente la tarea" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al tratar de borrar una tarea" });
  }
};
