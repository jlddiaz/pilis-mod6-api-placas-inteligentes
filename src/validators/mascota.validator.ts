import { check } from 'express-validator'
import { validateResult } from '../helpers/validateHelper'
import { NextFunction, Request, Response } from 'express'

export const validateCreateMascota = [
  check('nombre')
    .exists()
    .notEmpty()
    .withMessage('Este campo es requerido')
    .isString()
    .withMessage('Este campo debe ser un string!')
    .isLength({ min: 3 }),
  check('sexo')
    .exists()
    .notEmpty()
    .withMessage('Este campo es requerido')
    .isString()
    .withMessage('Este campo debe ser un string!')
    .isLength({ min: 3 }),
  check('vacunas')
    .exists()
    .notEmpty()
    .withMessage('Este campo es requerido')
    .isString()
    .withMessage('Este campo debe ser un string!')
    .isLength({ min: 5 }),
  check('foto')
    .exists()
    .notEmpty()
    .withMessage('Este campo es requerido')
    .isString()
    .withMessage('Este campo debe ser un string!')
    .isLength({ min: 3 }),
  check('qr')
    .exists()
    .notEmpty()
    .withMessage('Este campo es requerido')
    .isString()
    .withMessage('Este campo debe ser un string!')
    .isLength({ min: 3 }),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next)
  },
]
