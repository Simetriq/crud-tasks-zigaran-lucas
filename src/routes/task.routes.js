import express from "express";
import {
  postTask,
  getAllTask,
  getTaskporId,
  updateTask,
  deleteTask,
} from "../controllers/task.controllers.js";

const routesTask = express.Router();

routesTask.post("/tasks", postTask);
routesTask.get("/tasks", getAllTask);
routesTask.get("/tasks/:id", getTaskporId);
routesTask.put("/tasks/:id", updateTask);
routesTask.delete("/tasks/:id", deleteTask);

export default routesTask;
