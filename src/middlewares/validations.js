import { body, param, query } from "express-validator";
import { validationResult } from "express-validator";

export const postUserValidations = () => {
  createUser: [
    body("name").notEmpty().isLength({ min: 2, max: 50 }).trim().escape(),
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 6 }).matches(/\d/),
  ];
};

export const courseValidations = () => {};
