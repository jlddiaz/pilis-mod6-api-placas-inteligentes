import { Router } from 'express'
import {
  signUp,
  signIn,
  refresh,
  protectedEndpoint,
  getUsuarios,
} from '../controllers/usuario.controller'

const router = Router()

router.get('/usuarios', getUsuarios)
//Agregar para jwt
router.post('/signup', signUp)
router.post('/signin', signIn)
router.post('/token', refresh)
router.post(
  '/protected',
  protectedEndpoint
)

export default router