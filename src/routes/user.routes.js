import express from "express";
import {
  postUser,
  getAllUser,
  getUserId,
  putUser,
  deleteUser,
} from "../controllers/user.controllers.js";

const routesUser = express.Router();

routesUser.post("/api/users", postUser);
routesUser.get("/api/users", getAllUser);
routesUser.get("/api/users/:id", getUserId);
routesUser.put("/api/users/:id", putUser);
routesUser.delete("/api/users/:id", deleteUser);

export default routesUser;
