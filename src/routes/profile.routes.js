import { Router } from "express";
import {
  get_profile,
  getAll,
  post_profile,
} from "../controllers/profile.controllers.js";

const routesProfile = Router();

routesProfile.post("/profile", post_profile);
routesProfile.get("/profile/:id", get_profile);
routesProfile.get("/profile", getAll);

export default routesProfile;
