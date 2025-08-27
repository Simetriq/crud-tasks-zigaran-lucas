import { body, param } from "express-validator";

export const createUser = [
  body("name").trim().notEmpty().isLength({ min: 2, max: 50 }).escape(),
  body("email")
    .trim()
    .notEmpty()
    .isEmail()
    .withMessage("Email invalido")
    .normalizeEmail()
    .custom(async (email) => {
      try {
        const emailExiste = await User.findOne({ where: { email } });
        if (emailExiste) {
          return Promise.reject("El email pertenece a otro usuario");
        }
      } catch (error) {
        return Promise.reject("Error checking email availability");
      }
    }),
  body("password")
    .trim()
    .isLength({ min: 1 })
    .withMessage("La contraseña debe de ser minimo de 1")
    .matches(/\d/),
];

export const updateUserValidation = [
  body("name").optional().isLength({ min: 2, max: 50 }).trim().escape(),
  body("email")
    .optional()
    .isEmail()
    .withMessage("Email invalido")
    .normalizeEmail(),
  body("password").optional().isLength({ min: 6 }).matches(/\d/),
];
export const deleteUserValidation = [
  param("id")
    .isInt({ min: 1 })
    .withMessage(`ID debe ser un numero entero positivo`)
    .toInt(),
];
export const userByIdValidation = [
  param("id")
    .notEmpty()
    .isInt({ min: 1 })
    .withMessage(`ID debe ser un numero entero positivo`)
    .toInt(),
];
