import { Router } from "express";
import {
  getProfile,
  getAllProfiles,
  postProfile,
  updateProfile,
  deleteProfile,
} from "../controllers/profile.controllers.js";

const routesProfile = Router();

routesProfile.post("/profile", postProfile);
routesProfile.get("/profile/:id", getProfile);
routesProfile.get("/profile", getAllProfiles);
routesProfile.put("/profile/:id", updateProfile);
routesProfile.delete("/profile/:id", deleteProfile);

export default routesProfile;
