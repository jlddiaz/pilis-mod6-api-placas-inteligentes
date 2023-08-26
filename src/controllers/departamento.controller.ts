import { Request, Response } from 'express'
import { Departamento } from '../entities/Departamento'

export const getDepartamentos = async (req: Request, res: Response) => {
  try {
    const departamentos = await Departamento.find()
    return res.json(departamentos)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
export const getDepartamento = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const departamento = await Departamento.find({
      where: { idDepartamento: parseInt(id) },
      relations: { localidades: true },
    })
    if (!departamento)
      return res.status(404).json({ message: 'Departamento no encontrado' })
    return res.json(departamento)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}