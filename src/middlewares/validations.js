import { body, param } from "express-validator";

export const userValidations = {
  createUser: [
    body("name").notEmpty().isLength({ min: 2, max: 50 }).trim().escape(),
    body("email").isEmail().withMessage("Email invalido").normalizeEmail(),
    body("password").isLength({ min: 6 }).matches(/\d/),
  ],
  updateUserValidation: [
    body("name").optional().isLength({ min: 2, max: 50 }).trim().escape(),
    body("email")
      .optional()
      .isEmail()
      .withMessage("Email invalido")
      .normalizeEmail(),
    body("password").optional().isLength({ min: 6 }).matches(/\d/),
  ],
  deleteUserValidation: [
    param("id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
  ],
  userByIdValidation: [
    param("id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
  ],
  allUserValidation: [
    param("id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
  ],
};

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

export const taskValidations = {
  createTaskValidation: [
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
  ],
  updateTaskValidation: [
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
  ],
  deleteTaskValidation: [
    param("id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
  ],
  getAllTaskValidation: [
    param("id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
  ],
  getTaskValidation: [
    param("id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
  ],
};

export const userCourseValidation = {
  getAllUserCoursesValidation: [
    param("course_model_id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
    param("user_model_id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
  ],
  getUserCoursesById: [
    param("course_model_id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
    param("user_model_id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
  ],
  createUserCourseValidation: [
    param("course_model_id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
    param("user_model_id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
  ],
  updateUserCourseValidation: [
    param("course_model_id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
    param("user_model_id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
  ],
  deleteUserCourseValidation: [
    param("course_model_id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
    param("user_model_id")
      .isInt({ min: 1 })
      .withMessage(`ID debe ser un numero entero positivo`)
      .toInt(),
  ],
};

//! =====================================================================
//? ============= Manejo de Errores atravez de mensajes =================
//! =====================================================================
