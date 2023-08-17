import { Router } from 'express'
import {
  getPets,
  getPet,
  createPet,
  updatePet,
  deletePet,
} from '../controllers/pet.controller'
const router = Router()

router.get('/pets', getPets)
router.get('/pets/:id', getPet)
router.post(
  '/pets',
  createPet
)
router.put(
  '/pets/:id',
  updatePet
)
router.delete(
  '/pets/:id',
  deletePet
)

export default router