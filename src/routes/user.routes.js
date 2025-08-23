import express from "express";
import {
  postUser,
  GetAllUsers,
  getUserId,
  deleteUser,
  updateUser,
} from "../controllers/user.controllers.js";

const routesUser = express.Router();

routesUser.post("/user", postUser);
routesUser.get("/user", GetAllUsers);
routesUser.get("/user/:id", getUserId);
routesUser.put("/user/:id", updateUser);
routesUser.delete("/user/:id", deleteUser);

export default routesUser;
