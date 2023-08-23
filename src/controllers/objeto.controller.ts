import { Request, Response } from 'express'
import { Objeto } from '../entities/Objeto'

export const getObjetos = async (req: Request, res: Response) => {
  try {
    const objetos = await Objeto.find()
    return res.json(objetos)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const getObjeto = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const objeto = await Objeto.findOneBy({ idObjeto: parseInt(id) })

    if (!objeto)
      return res.status(404).json({ message: 'Objeto no encontrado' })

    return res.json(objeto)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const createObjeto = async (req: Request, res: Response) => {
  try {
    const { foto, qr, observaciones } = req.body
    const objeto = new Objeto()
    objeto.foto = foto
    objeto.qr = qr
    objeto.observaciones = observaciones
    await objeto.save()
    return res.json(objeto)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const updateObjeto = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const objeto = await Objeto.findOneBy({ idObjeto: parseInt(id) })
    if (!objeto)
      return res.status(404).json({ message: 'Objeto no encontrado' })

    await Objeto.update({ idObjeto: parseInt(id) }, req.body)

    return res.sendStatus(204)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const deleteObjeto = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const result = await Objeto.delete({ idObjeto: parseInt(id) })

    if (result.affected === 0)
      return res.status(404).json({ message: 'Objeto no encontrado' })

    return res.sendStatus(204)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
