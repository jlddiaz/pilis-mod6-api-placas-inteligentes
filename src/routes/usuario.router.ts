import { Router } from 'express'
import {
  signUp,
  signIn,
  refresh,
  protectedEndpoint,
  getUsuarios,
  getUsuario,
} from '../controllers/usuario.controller'
import { validateCreateUser } from '../validators/usuario.validator'

const router = Router()

router.get('/usuarios', getUsuarios)
router.get('/usuarios/:id', getUsuario)
//Agregar para jwt
router.post('/signup', validateCreateUser, signUp)
router.post('/signin', signIn)
router.post('/token', refresh)
router.post(
  '/protected',
  protectedEndpoint
)

export default router