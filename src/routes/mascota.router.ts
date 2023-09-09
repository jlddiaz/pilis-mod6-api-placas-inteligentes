import { Router } from 'express'
import {
  getMascotas,
  getMascota,
  createMascota,
  updateMascota,
  deleteMascota,
  getMascotasByIdPerfil,
} from '../controllers/mascota.controller'
const router = Router()

router.get('/mascotas', getMascotas)
router.get('/mascotas/:id', getMascota)
router.get('/mascotasByIdPerfil/:id', getMascotasByIdPerfil)
router.post(
  '/mascotas',
  createMascota
)
router.put(
  '/mascotas/:id',
  updateMascota
)
router.delete(
  '/mascotas/:id',
  deleteMascota
)

export default router