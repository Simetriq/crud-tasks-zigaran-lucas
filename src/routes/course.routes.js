import express from "express";
import {
  GetCourse,
  getCourseById,
  PostCourse,
  updateCourse,
} from "../controllers/course.controllers.js";
import { deleteUser } from "../controllers/user.controllers.js";

const CourseRoutes = express.Router();

CourseRoutes.post("/course", PostCourse);
CourseRoutes.get("/course/:id", getCourseById);
CourseRoutes.get("/course", GetCourse);
CourseRoutes.put("/course/:id", updateCourse);
CourseRoutes.delete("/course/:id", deleteUser);

export default CourseRoutes;
