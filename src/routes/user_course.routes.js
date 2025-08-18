import express from "express";
import {
  getAllUserCourse,
  postUserCourse,
} from "../controllers/user_course.controllers.js";

const routesUserCourse = express.Router();

routesUserCourse.post("/userCourse", postUserCourse);
routesUserCourse.get("/userCourse", getAllUserCourse);

export default routesUserCourse;
