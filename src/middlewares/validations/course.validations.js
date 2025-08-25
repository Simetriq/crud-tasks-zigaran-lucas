import { body, param } from "express-validator";

export const courseValidations = {
  createCourseValidation: [
    body("course").notEmpty().isLength({ min: 2, max: 100 }).trim().escape(),
    body("year")
      .notEmpty()
      .isLength({ max: 4 })
      .isInt()
      .trim()
      .withMessage(`year debe ser entero positivo`)
      .escape(),
  ],
  deleteCourseValidation: [
    param("id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
  ],
  updateCourseValidation: [
    body("course")
      .optional()
      .notEmpty()
      .isLength({ min: 2, max: 100 })
      .trim()
      .escape(),
    body("year")
      .optional()
      .notEmpty()
      .isLength({ max: 4 })
      .isInt()
      .trim()
      .withMessage(`year debe ser entero positivo`)
      .escape(),
  ],
  AllCoursesValidation: [
    param("id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
  ],
  getCoursesByIdValidation: [
    param("id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
  ],
};
