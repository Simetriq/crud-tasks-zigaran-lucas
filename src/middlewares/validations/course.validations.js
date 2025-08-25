import { body, param } from "express-validator";

export const courseValidations = [
  body("course").notEmpty().isLength({ min: 2, max: 100 }).trim().escape(),
  body("year")
    .notEmpty()
    .isLength({ max: 4 })
    .isInt()
    .trim()
    .withMessage(`year debe ser entero positivo`)
    .escape(),
];

export const deleteCourseValidation = [
  param("id")
    .isInt({ min: 1 })
    .withMessage(`ID debe ser un numero entero positivo`)
    .toInt(),
];

export const updateCourseValidation = [
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
];

export const getCoursesByIdValidation = [
  param("id")
    .isInt({ min: 1 })
    .withMessage(`ID debe ser un numero entero positivo`)
    .toInt(),
];
