import { Request, Response } from 'express'
import { Especie } from '../entities/Especie'

export const getEspecies = async (req: Request, res: Response) => {
  try {
    const especies = await Especie.find({ relations: { razas: true } })
    return res.json(especies)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
