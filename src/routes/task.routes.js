import express from "express";
import {
  postTask,
  getAllTask,
  getTaskporId,
  updateTask,
  deleteTask,
} from "../controllers/task.controllers.js";
import {
  createTaskValidation,
  updateTaskValidation,
  deleteTaskValidation,
  getAllTaskValidation,
  getTaskValidation,
} from "../middlewares/validations.js";

const routesTask = express.Router();

routesTask.post("/tasks", createTaskValidation, postTask);
routesTask.get("/tasks", getTaskValidation, getAllTask);
routesTask.get("/tasks/:id", getAllTaskValidation, getTaskporId);
routesTask.put("/tasks/:id", updateTaskValidation, updateTask);
routesTask.delete("/tasks/:id", deleteTaskValidation, deleteTask);

export default routesTask;
