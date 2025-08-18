import express from "express";
import { get_course, post_course } from "../controllers/course.controllers.js";

const courseRoutes = express.Router();

courseRoutes.post("/course", post_course);
courseRoutes.get("/course/:id", get_course);

export default courseRoutes;
