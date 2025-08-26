import { body, param } from "express-validator";

export const createTaskValidation = [
  body("title")
    .notEmpty()
    .toLowerCase()
    .isLength({ min: 2, max: 50 })
    .trim()
    .escape(),
  body("description")
    .notEmpty()
    .toLowerCase()
    .isLength({ min: 0, max: 255 })
    .trim()
    .escape(),
  body("is_complete")
    .notEmpty()
    .isBoolean()
    .withMessage("Debe ser booleano")
    .escape(),
];
export const updateTaskValidation = [
  body("title")
    .optional()
    .notEmpty()
    .toLowerCase()
    .isLength({ min: 2, max: 50 })
    .trim()
    .escape(),
  body("description")
    .optional()
    .notEmpty()
    .toLowerCase()
    .isLength({ min: 0, max: 255 })
    .trim()
    .escape(),
  body("is_complete")
    .optional()
    .notEmpty()
    .isBoolean()
    .withMessage("Debe ser booleano")
    .escape(),
];
export const deleteTaskValidation = [
  param("id")
    .isInt({ min: 1 })
    .withMessage(`ID debe ser un numero entero positivo`)
    .toInt(),
];
export const getTaskValidation = [
  param("id")
    .isInt({ min: 1 })
    .withMessage(`ID debe ser un numero entero positivo`)
    .toInt(),
];
