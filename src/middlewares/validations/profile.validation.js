import { body, param } from "express-validator";

export const profileValidations = {
  createProfileValidation: [
    body("name").notEmpty().isLength({ min: 2, max: 50 }).trim().escape(),
    body("rol").notEmpty().isLength({ min: 2, max: 50 }).trim().escape(),
  ],
  updateProfileValidation: [
    body("name")
      .optional()
      .notEmpty()
      .isLength({ min: 2, max: 50 })
      .trim()
      .escape(),
    body("rol")
      .optional()
      .notEmpty()
      .isLength({ min: 2, max: 50 })
      .trim()
      .escape(),
  ],
  deleteProfileValidation: [
    param("id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
  ],
  allProfilesValidation: [
    param("id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
  ],
  getProfileByIdValidation: [
    param("id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
  ],
};
