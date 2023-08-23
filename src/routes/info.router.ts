import { Request, Response, Router } from 'express'
import { Departamento } from '../entities/Departamento'
import { Provincia } from '../entities/Provincia'
import { Especie } from '../entities/Especie'
const router = Router()

router.get('/departamentos', async (req: Request, res: Response) => {
  try {
    const departamentos = await Departamento.find()
    return res.json(departamentos)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
})
router.get('/provincias', async (req: Request, res: Response) => {
  try {
    const provincias = await Provincia.find()
    return res.json(provincias)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
})
router.get('/especies', async (req: Request, res: Response) => {
  try {
    const especies = await Especie.find()
    return res.json(especies)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
})

export default router
