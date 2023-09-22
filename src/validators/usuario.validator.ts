import { check } from 'express-validator'
import { validateResult } from '../helpers/validateHelper'
import { NextFunction, Request, Response } from 'express'

export const validateCreateUser = [
  check('mail')
    .exists()
    .isEmail()
    .withMessage('El mail no es valido')
    .notEmpty()
    .withMessage('Este campo es requerido'),
  check('password')
    .exists()
    .notEmpty()
    .withMessage('Este campo es requerido')
    .isLength({ min: 6 })
    .withMessage('La longitud minima del password es 6 de caracteres'),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next)
  },
]