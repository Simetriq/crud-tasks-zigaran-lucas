import express from "express";
import {
  get_profile,
  post_profile,
} from "../controllers/profile.controllers.js";

const routesProfile = express.Router();

routesProfile.post("/profile", post_profile);
routesProfile.get("/profile/:id", get_profile);

export default routesProfile;
