import { body, param } from "express-validator";

export const getAllUserCoursesValidation = [
  param("course_model_id")
    .isInt({ min: 1 })
    .withMessage(`ID debe ser un numero entero positivo`)
    .toInt(),
  param("user_model_id")
    .isInt({ min: 1 })
    .withMessage(`ID debe ser un numero entero positivo`)
    .toInt(),
];
export const getUserCoursesById = [
  param("course_model_id")
    .isInt({ min: 1 })
    .withMessage(`ID debe ser un numero entero positivo`)
    .toInt(),
  param("user_model_id")
    .isInt({ min: 1 })
    .withMessage(`ID debe ser un numero entero positivo`)
    .toInt(),
];
export const createUserCourseValidation = [
  param("course_model_id")
    .isInt({ min: 1 })
    .withMessage(`ID debe ser un numero entero positivo`)
    .toInt(),
  param("user_model_id")
    .isInt({ min: 1 })
    .withMessage(`ID debe ser un numero entero positivo`)
    .toInt(),
];
export const updateUserCourseValidation = [
  param("course_model_id")
    .isInt({ min: 1 })
    .withMessage(`ID debe ser un numero entero positivo`)
    .toInt(),
  param("user_model_id")
    .isInt({ min: 1 })
    .withMessage(`ID debe ser un numero entero positivo`)
    .toInt(),
];
export const deleteUserCourseValidation = [
  param("course_model_id")
    .isInt({ min: 1 })
    .withMessage(`ID debe ser un numero entero positivo`)
    .toInt(),
  param("user_model_id")
    .isInt({ min: 1 })
    .withMessage(`ID debe ser un numero entero positivo`)
    .toInt(),
];
