import { plainToClass } from 'class-transformer'
import { Request, Response } from 'express'
import { Mascota } from '../entities/Mascota'
import { Perfil } from '../entities/Perfil'
import { Raza } from '../entities/Raza'
import { MascotaDTO } from '../dto/mascota.dto'

export const getMascotas = async (req: Request, res: Response) => {
  try {
    const mascotas = await Mascota.find()
    res.json(mascotas)
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

export const getMascotasByIdPerfil = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    
    const perfil = await Perfil.findOne({
      where: { idPerfil: parseInt(id) },
      relations: ['mascotas'],
    })
    if (!perfil?.mascotas)
      return res.status(404).json({ message: 'Mascotas no encontradas' })
    
    return res.json(perfil.mascotas)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
export const createMascota = async (req: Request, res: Response) => {
  try {
    const {
      nombre,
      sexo,
      vacunas,
      fechaNacimiento,
      foto,
      qr,
      observaciones,
      idResponsable,
      idRaza,
    } = req.body
    const perfil = await Perfil.findOneBy({
      idPerfil: parseInt(idResponsable),
    })
    const raza = await Raza.findOneBy({
      idRaza: parseInt(idRaza),
    })
    if (!perfil)
      return res.status(404).json({ message: 'Responsable no encontrado' })
    if (!raza) return res.status(404).json({ message: 'Raza no encontrada' })

    const mascota = new Mascota()
    mascota.nombre = nombre
    mascota.sexo = sexo
    mascota.vacunas = vacunas
    // mascota.fechaFallecimiento = fechaNacimiento
    mascota.foto = foto
    mascota.qr = qr
    mascota.observaciones = observaciones
    mascota.perfil = perfil
    mascota.raza = raza
    await mascota.save()
    return res.json(mascota)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const updateMascota = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { idResponsable, idRaza } = req.body
    const mascota = await Mascota.findOneBy({ idMascota: parseInt(id) })
    if (!mascota)
      return res.status(404).json({ message: 'Mascota no encontrada' })

    const perfil = idResponsable
      ? await Perfil.findOneBy({
          idPerfil: parseInt(idResponsable),
        })
      : ''

    const raza = idRaza
      ? await Raza.findOneBy({
          idRaza: parseInt(idRaza),
        })
      : ''

    const newMascota = plainToClass(MascotaDTO, req.body, {
      excludeExtraneousValues: true,
    })
    if (perfil) newMascota.perfil = perfil
    if (raza) newMascota.raza = raza
    console.log(newMascota)
    await Mascota.update({ idMascota: parseInt(id) }, newMascota)

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
