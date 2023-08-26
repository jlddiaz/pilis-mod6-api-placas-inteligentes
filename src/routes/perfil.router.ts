import { Router } from 'express'
import {
  getPerfiles,
  getPerfil,
  createPerfil,
  updatePerfil,
  deletePerfil,
} from '../controllers/perfil.controller'
const router = Router()

router.get('/perfiles', getPerfiles)
router.get('/perfiles/:id', getPerfil)
router.post(
  '/perfiles',
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