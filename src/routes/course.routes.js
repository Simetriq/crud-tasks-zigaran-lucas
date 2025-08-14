import express from "express";
import { get_course, post_course } from "../controllers/course.controllers.js";

const courseRoutes = express.Router();

courseRoutes.post("/tasks", post_course);
courseRoutes.get("/tasks/:id", get_course);

export default courseRoutes;
