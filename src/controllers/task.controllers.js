import sequelize, { where } from "sequelize";
import TaskModel from "../models/task.model.js";

export const postTask = async (req, res) => {
  if (req.body) {
    for (let value in req.body) {
      if (typeof req.body[value] === "string") {
        req.body[value] = req.body[value].trim();
      }
    }
  }

  try {
    const { title, description, isComplete } = req.body;

    const titleUnico = await TaskModel.findOne({ where: { title } });
    if (titleUnico)
      return res
        .status(400)
        .json({ message: "este titulo ya esta registrado" });

    if (title === undefined || title === "" || title === null)
      return res.status(400).json({ message: "title no debe estar vacio" });
    if (title.length > 100)
      return res
        .status(400)
        .json({ message: "title no debe ser mayor a 100 caracteres" });
    if (description.length > 100)
      return res
        .status(400)
        .json({ message: "la descripcion no debe ser mayor a 100 caracteres" });

    if (description === undefined || description === "")
      return res
        .status(400)
        .json({ message: "description no debe estar vacio" });
    if (typeof isComplete !== "boolean")
      return res.status(400).json({ message: "isComplete debe ser booleano" });

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
