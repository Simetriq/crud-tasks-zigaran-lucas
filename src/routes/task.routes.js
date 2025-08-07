import express from "express";
import {
  postTask,
  getAllTask,
  getTaskporId,
  updateTask,
  deleteTask,
} from "../controllers/task.controllers.js";

const routesTask = express.Router();

routesTask.post("/api/tasks", postTask);
routesTask.get("/api/tasks", getAllTask);
routesTask.get("/api/tasks/:id", getTaskporId);
routesTask.put("/api/tasks/:id", updateTask);
routesTask.delete("/api/tasks/:id", deleteTask);

export default routesTask;
