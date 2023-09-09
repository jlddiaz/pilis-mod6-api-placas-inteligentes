import { Request, Response } from 'express'
import { Perfil } from '../entities/Perfil'
import { Localidad } from '../entities/Localidad'
import { Usuario } from '../entities/Usuario'
import { plainToClass } from 'class-transformer'

export const getPerfiles = async (req: Request, res: Response) => {
  try {
    const perfiles = await Perfil.find()
    return res.json(perfiles)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const getPerfil = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const perfil = await Perfil.findOneBy({ idPerfil: parseInt(id) })

    if (!perfil)
      return res.status(404).json({ message: 'Perfil no encontrado' })

    return res.json(perfil)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const createPerfil = async (req: Request, res: Response) => {
  const {
    apellido,
    nombre,
    foto,
    telefono,
    facebook,
    instagram,
    telegram,
    direccion,
    latitud,
    longitud,
    idLocalidad,
    idUsuario,
  } = req.body
  try {
    const localidad = await Localidad.findOneBy({
      idLocalidad: parseInt(idLocalidad),
    })
    if (!localidad)
      return res.status(404).json({ message: 'Localidad no encontrada' })

    const usuario = await Usuario.findOneBy({
      idUsuario: parseInt(idUsuario),
    })
    if (!usuario)
      return res.status(404).json({ message: 'Usuario no encontrado' })

    const perfil = new Perfil()
    perfil.apellido = apellido
    perfil.nombre = nombre
    perfil.foto = foto
    perfil.telefono = telefono
    perfil.facebook = facebook
    perfil.instagram = instagram
    perfil.telegram = telegram
    perfil.direccion = direccion
    perfil.latitud = latitud
    perfil.longitud = longitud
    perfil.localidad = localidad
    perfil.usuario = usuario
    await perfil.save()
    return res.json(perfil)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const updatePerfil = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const perfil = await Perfil.findOneBy({ idPerfil: parseInt(id) })
    if (!perfil)
      return res.status(404).json({ message: 'Perfil no encontrado' })

    await Perfil.update({ idPerfil: parseInt(id) }, req.body)

    return res.sendStatus(204)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const deletePerfil = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const result = await Perfil.delete({ idPerfil: parseInt(id) })

    if (result.affected === 0)
      return res.status(404).json({ message: 'Perfil no encontrado' })

    return res.sendStatus(204)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
