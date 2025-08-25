import express from "express";
import {
  postTask,
  getAllTask,
  getTaskporId,
  updateTask,
  deleteTask,
} from "../controllers/task.controllers.js";
import controller from "../middlewares/errorHandler.js";
import {
  createTaskValidation,
  deleteTaskValidation,
  getTaskValidation,
  updateTaskValidation,
} from "../middlewares/validations/task.validations.js";

const routesTask = express.Router();

routesTask.post("/tasks", createTaskValidation, controller, postTask);
routesTask.get("/tasks", getTaskValidation, controller, getAllTask);
routesTask.get("/tasks/:id", controller, getTaskporId);
routesTask.put("/tasks/:id", updateTaskValidation, controller, updateTask);
routesTask.delete("/tasks/:id", deleteTaskValidation, controller, deleteTask);

export default routesTask;
