import express from "express";
import { userValidations } from "../middlewares/validations.js";

import {
  postUser,
  GetAllUsers,
  getUserId,
  deleteUser,
  updateUser,
} from "../controllers/user.controllers.js";

const routesUser = express.Router();

const {
  createUser,
  allUserValidation,
  updateUserValidation,
  deleteUserValidation,
  userByIdValidation,
} = userValidations;

routesUser.post("/user", createUser, postUser);
routesUser.get("/user", allUserValidation, GetAllUsers);
routesUser.get("/user/:id", userByIdValidation, getUserId);
routesUser.put("/user/:id", updateUserValidation, updateUser);
routesUser.delete("/user/:id", deleteUserValidation, deleteUser);

export default routesUser;
