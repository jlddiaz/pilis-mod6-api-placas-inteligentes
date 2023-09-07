import { check } from 'express-validator'
import { validateResult } from '../helpers/validateHelper'
import { NextFunction, Request, Response } from 'express'

export const validateCreateObjeto = [
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
  check('observaciones')
    .exists()
    .notEmpty()
    .withMessage('Este campo es requerido')
    .isString()
    .withMessage('Este campo debe ser un string!')
    .isLength({ min: 5 }),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next)
  },
]
