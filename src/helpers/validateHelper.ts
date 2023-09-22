import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

export const validateResult = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // try {
  //   validationResult(req).throw()
  //   return next()
  // } catch (error) {
  //   res.status(403).json(error)
  // }

  const result = validationResult(req)
  if(!result.isEmpty()){
    return res.status(400).json({ errors: result.array() });
  }
  return next()
}
