import { Router } from 'express'
import {
  getObjetos,
  getObjeto,
  createObjeto,
  updateObjeto,
  deleteObjeto,
  getObjetosByIdPerfil,
} from '../controllers/objeto.controller'
const router = Router()

router.get('/objetos', getObjetos)
router.get('/objetos/:id', getObjeto)
router.get('/objetosByIdPerfil/:id', getObjetosByIdPerfil)
router.post(
  '/objetos',
  createObjeto
)
router.put(
  '/objetos/:id',
  updateObjeto
)
router.delete(
  '/objetos/:id',
  deleteObjeto
)

export default router