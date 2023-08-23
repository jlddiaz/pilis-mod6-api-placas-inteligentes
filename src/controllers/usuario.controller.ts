import { Request, Response } from 'express'
import { Usuario } from '../entities/Usuario'

export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await Usuario.find()
    return res.json(usuarios)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const getUsuario = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const usuario = await Usuario.findOneBy({ idUsuario: parseInt(id) })

    if (!usuario)
      return res.status(404).json({ message: 'Usuario no encontrado' })

    return res.json(usuario)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const createUsuario = async (req: Request, res: Response) => {
  const {
    nombre,
    apellido,
    password,
    mail,
    foto,
    telefono,
    facebook,
    instagram,
    telegram,
    calle,
    numero,
    latitud,
    longitud,
  } = req.body
  try {
    const usuario = new Usuario()
    usuario.nombre = nombre
    usuario.apellido = apellido
    usuario.password = password
    usuario.mail = mail
    usuario.foto = foto
    usuario.telefono = telefono
    usuario.facebook = facebook
    usuario.instagram = instagram
    usuario.telegram = telegram
    usuario.calle = calle
    usuario.numero = numero
    usuario.latitud = latitud
    usuario.longitud = longitud
    await usuario.save()
    return res.json(usuario)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const updateUsuario = async (req: Request, res: Response) => {  
  try {
    const { id } = req.params
    const usuario = await Usuario.findOneBy({ idUsuario: parseInt(id) })
    if (!usuario)
      return res.status(404).json({ message: 'Usuario no encontrado' })

    await Usuario.update({ idUsuario: parseInt(id) }, req.body)

    return res.sendStatus(204)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const deleteUsuario = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const result = await Usuario.delete({ idUsuario: parseInt(id) })

    if (result.affected === 0)
      return res.status(404).json({ message: 'Usuario no encontrado' })

    return res.sendStatus(204)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
