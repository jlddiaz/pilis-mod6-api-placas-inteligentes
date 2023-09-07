import { check } from 'express-validator'
import { validateResult } from '../helpers/validateHelper'
import { NextFunction, Request, Response } from 'express'

export const validateCreatePerfil = [
  check('apellido')
    .exists()
    .notEmpty()
    .withMessage('Este campo es requerido')
    .isString()
    .withMessage('Este campo debe ser un string!')
    .isLength({ min: 3 }),
  check('nombre')
    .exists()
    .notEmpty()
    .withMessage('Este campo es requerido')
    .isString()
    .withMessage('Este campo debe ser un string!')
    .isLength({ min: 3 }),
  check('telefono')
    .exists()
    .notEmpty()
    .withMessage('Este campo es requerido')
    .isString()
    .withMessage('Este campo debe ser un string!')
    .isLength({ min: 10 }),
  check('foto')
    .optional()
    .isString()
    .withMessage('Este campo debe ser un string!')
    .isLength({ min: 3 }),
  check('direccion')
    .optional()
    .isString()
    .withMessage('Este campo debe ser un string!')
    .isLength({ min: 3 }),
  check('latitud')
    .optional()
    .isString()
    .withMessage('Este campo debe ser un string!')
    .isLength({ min: 3 }),
  check('longitud')
    .optional()
    .isString()
    .withMessage('Este campo debe ser un string!')
    .isLength({ min: 3 }),
  check('facebook')
    .optional()
    .isString()
    .withMessage('Este campo debe ser un string!')
    .isLength({ min: 3 }),
  check('instagram')
    .optional()
    .isString()
    .withMessage('Este campo debe ser un string!')
    .isLength({ min: 3 }),
  check('telegram')
    .optional()
    .isString()
    .withMessage('Este campo debe ser un string!')
    .isLength({ min: 3 }),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next)
  },
]
