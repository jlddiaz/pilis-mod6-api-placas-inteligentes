import { Router } from 'express'
import {
  getPerfiles,
  getPerfil,
  createPerfil,
  updatePerfil,
  deletePerfil,
  getPerfilByIdUsuario,
} from '../controllers/perfil.controller'
import { validateCreatePerfil } from '../validators/perfil.validator'
const router = Router()

router.get('/perfiles', getPerfiles)
router.get('/perfiles/:id', getPerfil)
router.get('/perfilesByIdUsuario/:id', getPerfilByIdUsuario)
router.post(
  '/perfiles',
  validateCreatePerfil,
  createPerfil
)
router.put(
  '/perfiles/:id',
  updatePerfil
)
router.delete(
  '/perfiles/:id',
  deletePerfil
)

export default router