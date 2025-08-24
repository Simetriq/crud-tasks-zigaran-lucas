import { Router } from "express";
import {
  getProfile,
  getAllProfiles,
  postProfile,
  updateProfile,
  deleteProfile,
} from "../controllers/profile.controllers.js";
import {
  createProfileValidation,
  updateProfileValidation,
  deleteProfileValidation,
  allProfilesValidation,
  getProfileByIdValidation,
} from "../middlewares/validations.js";

const routesProfile = Router();

routesProfile.post("/profile", createProfileValidation, postProfile);
routesProfile.get("/profile/:id", getProfileByIdValidation, getProfile);
routesProfile.get("/profile", allProfilesValidation, getAllProfiles);
routesProfile.put("/profile/:id", updateProfileValidation, updateProfile);
routesProfile.delete("/profile/:id", deleteProfileValidation, deleteProfile);

export default routesProfile;
