import express from "express";
import { GetCourse, PostCourse } from "../controllers/course.controllers.js";

const CourseRoutes = express.Router();

CourseRoutes.post("/course", PostCourse);
CourseRoutes.get("/course/:id", GetCourse);

export default CourseRoutes;
