import express from "express";
import {
  postUser,
  GetAllUsers,
  getUserId,
  deleteUser,
  updateUser,
} from "../controllers/user.controllers.js";
import controller from "../middlewares/errorHandler.js";
import {
  createUser,
  deleteUserValidation,
  updateUserValidation,
  userByIdValidation,
} from "../middlewares/validations/user.validations.js";

const routesUser = express.Router();

routesUser.post("/user", createUser, postUser);
routesUser.get("/user", controller, GetAllUsers);
routesUser.get("/user/:id", userByIdValidation, getUserId);
routesUser.put("/user/:id", updateUserValidation, updateUser);
routesUser.delete("/user/:id", deleteUserValidation, deleteUser);

export default routesUser;
