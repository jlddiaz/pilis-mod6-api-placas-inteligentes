import { Router } from 'express'
import {
  signUp,
  signIn,
  refresh,
  protectedEndpoint,
  getUsuarios,
  getUsuario,
} from '../controllers/usuario.controller'

const router = Router()

router.get('/usuarios', getUsuarios)
router.get('/usuarios/:id', getUsuario)
//Agregar para jwt
router.post('/signup', signUp)
router.post('/signin', signIn)
router.post('/token', refresh)
router.post(
  '/protected',
  protectedEndpoint
)

export default router