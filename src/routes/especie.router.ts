import { Router } from 'express'
import { getEspecies } from '../controllers/especie.controller'
const router = Router()

router.get('/especies', getEspecies)

export default router
