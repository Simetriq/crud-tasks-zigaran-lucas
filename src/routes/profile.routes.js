import express from "express";
import {
  get_profile,
  post_profile,
} from "../controllers/profile.controllers.js";

const routesProfile = express.Router();

routesProfile.post("/tasks", post_profile);
routesProfile.get("/tasks/:id", get_profile);

export default routesProfile;
