import express from "express";
import {
  GetCourse,
  getCourseById,
  PostCourse,
  updateCourse,
  deleteUser,
} from "../controllers/course.controllers.js";
import {
  createCourseValidation,
  deleteCourseValidation,
  updateCourseValidation,
  AllCoursesValidation,
  getCoursesByIdValidation,
} from "../middlewares/validations.js";

const CourseRoutes = express.Router();

CourseRoutes.post("/course", createCourseValidation, PostCourse);
CourseRoutes.get("/course/:id", getCoursesByIdValidation, getCourseById);
CourseRoutes.get("/course", AllCoursesValidation, GetCourse);
CourseRoutes.put("/course/:id", updateCourseValidation, updateCourse);
CourseRoutes.delete("/course/:id", deleteCourseValidation, deleteUser);

export default CourseRoutes;
