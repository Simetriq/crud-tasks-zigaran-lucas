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
  deleteProfileValidation,
  getProfileByIdValidation,
  updateProfileValidation,
} from "../middlewares/validations/profile.validation.js";
import controller from "../middlewares/errorHandler.js";

const routesProfile = Router();

routesProfile.post(
  "/profile",
  createProfileValidation,
  controller,
  postProfile
);
routesProfile.get(
  "/profile/:id",
  getProfileByIdValidation,
  controller,
  getProfile
);
routesProfile.get("/profile", controller, controller, getAllProfiles);
routesProfile.put(
  "/profile/:id",
  updateProfileValidation,
  controller,
  updateProfile
);
routesProfile.delete(
  "/profile/:id",
  deleteProfileValidation,
  controller,
  deleteProfile
);

export default routesProfile;
