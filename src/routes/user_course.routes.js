import express from "express";
import {
  deleteUserCourse,
  getAllUserCourse,
  getUserCourseById,
  postUserCourse,
  updateUserCourse,
} from "../controllers/user_course.controllers.js";
import { userCourseValidation } from "../middlewares/validations.js";

const routesUserCourse = express.Router();

const { getAllUserCoursesValidation, getUserCoursesById } =
  userCourseValidation;

routesUserCourse.post("/userCourse", postUserCourse);
routesUserCourse.get(
  "/userCourse",
  getAllUserCoursesValidation,
  getAllUserCourse
);
routesUserCourse.get("/userCourses/:id", getUserCoursesById, getUserCourseById);
routesUserCourse.put("/userCourses/:id", updateUserCourse);
routesUserCourse.delete("/userCourses/:id", deleteUserCourse);

export default routesUserCourse;
