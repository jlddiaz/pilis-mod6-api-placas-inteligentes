import { Request, Response } from 'express'
import { Mascota } from '../entities/Mascota'

export const getMascotas = async (req: Request, res: Response) => {
  try {
    const mascotas = await Mascota.find()
    return res.json(mascotas)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const getMascota = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const mascota = await Mascota.findOneBy({ idMascota: parseInt(id) })

    if (!mascota)
      return res.status(404).json({ message: 'Mascota no encontrada' })

    return res.json(mascota)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const createMascota = async (req: Request, res: Response) => {
  try {
    const { nombre, sexo, vacunas, fechaNacimiento, foto, qr, observaciones } = req.body
    const mascota = new Mascota()
    mascota.nombre = nombre
    mascota.sexo = sexo
    mascota.vacunas = vacunas
    mascota.fechaFallecimiento = fechaNacimiento
    mascota.foto = foto
    mascota.qr = qr
    mascota.observaciones = observaciones
    await mascota.save()
    return res.json(mascota)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const updateMascota = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const mascota = await Mascota.findOneBy({ idMascota: parseInt(id) })
    if (!mascota)
      return res.status(404).json({ message: 'Mascota no encontrada' })

    await Mascota.update({ idMascota: parseInt(id) }, req.body)

    return res.sendStatus(204)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const deleteMascota = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const result = await Mascota.delete({ idMascota: parseInt(id) })

    if (result.affected === 0)
      return res.status(404).json({ message: 'Mascota no encontrada' })

    return res.sendStatus(204)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}