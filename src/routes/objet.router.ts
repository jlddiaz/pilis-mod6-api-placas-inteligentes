import { Router } from 'express'
import {
  getObjets,
  getObjet,
  createObjet,
  updateObjet,
  deleteObjet,
} from '../controllers/objet.controller'
const router = Router()

router.get('/users', getObjets)
router.get('/users/:id', getObjet)
router.post(
  '/users',
  createObjet
)
router.put(
  '/users/:id',
  updateObjet
)
router.delete(
  '/users/:id',
  deleteObjet
)

export default router