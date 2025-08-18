import express from "express";
import {
  getAllUserCourse,
  postUserCourse,
} from "../controllers/user_course.controllers.js";

const routesUserCourse = express.Router();

routesUser.post("/userCourse", postUserCourse);
routesUser.get("/userCourse", getAllUserCourse);

export default routesUserCourse;
