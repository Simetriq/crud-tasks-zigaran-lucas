import express from "express";
import { postUserValidations } from "../middlewares/validations.js";

import {
  postUser,
  GetAllUsers,
  getUserId,
  deleteUser,
  updateUser,
} from "../controllers/user.controllers.js";

const routesUser = express.Router();

routesUser.post("/user", postUserValidations, postUser);
routesUser.get("/user", GetAllUsers);
routesUser.get("/user/:id", getUserId);
routesUser.put("/user/:id", updateUser);
routesUser.delete("/user/:id", deleteUser);

export default routesUser;
