import { Router } from 'express'
import {
  getDepartamento,
  getDepartamentos,
} from '../controllers/departamento.controller'
const router = Router()

router.get('/departamentos', getDepartamentos)
router.get('/departamentos/:id', getDepartamento)

export default router
