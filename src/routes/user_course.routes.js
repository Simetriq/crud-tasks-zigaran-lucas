import express from "express";
import {
  deleteUserCourse,
  getAllUserCourse,
  getUserCourseById,
  postUserCourse,
  updateUserCourse,
} from "../controllers/user_course.controllers.js";

const routesUserCourse = express.Router();

routesUserCourse.post("/userCourse", postUserCourse);
routesUserCourse.get("/userCourse", getAllUserCourse);
routesUserCourse.get("/userCourses/:id", getUserCourseById);
routesUserCourse.put("/userCourses/:id", updateUserCourse);
routesUserCourse.delete("/userCourses/:id", deleteUserCourse);

export default routesUserCourse;
