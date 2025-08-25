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

const {
  getAllUserCoursesValidation,
  getUserCoursesById,
  createUserCourseValidation,
  deleteUserCourseValidation,
  updateUserCourseValidation,
} = userCourseValidation;

routesUserCourse.post(
  "/userCourse",
  createUserCourseValidation,
  postUserCourse
);
routesUserCourse.get(
  "/userCourse",
  getAllUserCoursesValidation,
  getAllUserCourse
);
routesUserCourse.get("/userCourses/:id", getUserCoursesById, getUserCourseById);
routesUserCourse.put(
  "/userCourses/:id",
  updateUserCourseValidation,
  updateUserCourse
);
routesUserCourse.delete(
  "/userCourses/:id",
  deleteUserCourseValidation,
  deleteUserCourse
);

export default routesUserCourse;
