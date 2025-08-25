import express from "express";
import {
  deleteUserCourse,
  getAllUserCourse,
  getUserCourseById,
  postUserCourse,
  updateUserCourse,
} from "../controllers/user_course.controllers.js";
import {
  createUserCourseValidation,
  deleteUserCourseValidation,
  getUserCoursesById,
  updateUserCourseValidation,
} from "../middlewares/validations/userCourseValidation.js";
import controller from "../middlewares/errorHandler.js";

const routesUserCourse = express.Router();

routesUserCourse.post(
  "/userCourse",
  createUserCourseValidation,
  controller,
  postUserCourse
);
routesUserCourse.get("/userCourse", controller, getAllUserCourse);
routesUserCourse.get(
  "/userCourses/:id",
  getUserCoursesById,
  controller,
  getUserCourseById
);
routesUserCourse.put(
  "/userCourses/:id",
  updateUserCourseValidation,
  controller,
  updateUserCourse
);
routesUserCourse.delete(
  "/userCourses/:id",
  deleteUserCourseValidation,
  controller,
  deleteUserCourse
);

export default routesUserCourse;
