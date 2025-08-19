import { Router } from "express";
import {
  getProfile,
  getAllProfiles,
  postProfile,
} from "../controllers/profile.controllers.js";

const routesProfile = Router();

routesProfile.post("/profile", postProfile);
routesProfile.get("/profile/:id", getProfile);
routesProfile.get("/profile", getAllProfiles);

export default routesProfile;
