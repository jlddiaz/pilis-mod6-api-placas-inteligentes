import { Request, Response } from 'express'
import { Provincia } from '../entities/Provincia'

export const getProvincias = async (req: Request, res: Response) => {
  try {
    const provincias = await Provincia.find()
    return res.json(provincias)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const getProvincia = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const provincia = await Provincia.find({
      where: { idProvincia: parseInt(id) },
      relations: { departamentos: true },
    })
    if (!provincia)
      return res.status(404).json({ message: 'Provincia no encontrada' })
    return res.json(provincia)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
