import express from "express";
import {
  GetCourse,
  getCourseById,
  PostCourse,
  updateCourse,
  deleteUser,
} from "../controllers/course.controllers.js";
import {
  courseValidations,
  deleteCourseValidation,
  updateCourseValidation,
  getCoursesByIdValidation,
} from "../middlewares/validations/course.validations.js";
import controller from "../middlewares/errorHandler.js";

const CourseRoutes = express.Router();

CourseRoutes.post("/course", courseValidations, controller, PostCourse);
CourseRoutes.get(
  "/course/:id",
  getCoursesByIdValidation,
  controller,
  getCourseById
);
CourseRoutes.get("/course", GetCourse);
CourseRoutes.put(
  "/course/:id",
  updateCourseValidation,
  controller,
  updateCourse
);
CourseRoutes.delete(
  "/course/:id",
  deleteCourseValidation,
  controller,
  deleteUser
);

export default CourseRoutes;
