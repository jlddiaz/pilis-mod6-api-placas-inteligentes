import { Router } from 'express'
import {
  getProvincia,
  getProvincias,
} from '../controllers/provincia.controller'
const router = Router()

router.get('/provincias', getProvincias)
router.get('/provincias/:id', getProvincia)

export default router
