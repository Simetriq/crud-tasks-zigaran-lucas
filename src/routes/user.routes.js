import express from "express";
import {
  postUser,
  getAllUser,
  getUserId,
  putUser,
  deleteUser,
} from "../controllers/user.controllers.js";

const routesUser = express.Router();

routesUser.post("/users", postUser);
routesUser.get("/users", getAllUser);
routesUser.get("/users/:id", getUserId);
routesUser.put("/users/:id", putUser);
routesUser.delete("/users/:id", deleteUser);

export default routesUser;
