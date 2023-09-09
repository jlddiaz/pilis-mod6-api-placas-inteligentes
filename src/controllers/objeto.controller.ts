import { plainToClass } from 'class-transformer'
import { Request, Response } from 'express'
import { Objeto } from '../entities/Objeto'
import { Perfil } from '../entities/Perfil'
import { ObjetoDTO } from '../dto/objeto.dto'

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

export const getObjetosByIdPerfil = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    
    const perfil = await Perfil.findOne({
      where: { idPerfil: parseInt(id) },
      relations: ['objetos'],
    })
    if (!perfil?.objetos)
      return res.status(404).json({ message: 'Objetos no encontrados' })
    
    return res.json(perfil.objetos)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const createObjeto = async (req: Request, res: Response) => {
  try {
    const { foto, qr, observaciones, idPropietario } = req.body
    const perfil = await Perfil.findOneBy({
      idPerfil: parseInt(idPropietario),
    })
    if (!perfil)
      return res.status(404).json({ message: 'Propietario no encontrado' })

    const objeto = new Objeto()
    objeto.foto = foto
    objeto.qr = qr
    objeto.observaciones = observaciones
    objeto.perfil = perfil
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
    
    const perfil = req.body.idPropietario
      ? await Perfil.findOneBy({ idPerfil: parseInt(req.body.idPropietario) })
      : ''

    const newObjeto = plainToClass(ObjetoDTO, req.body, {
      excludeExtraneousValues: true,
    })
    if (perfil) newObjeto.perfil = perfil
    await Objeto.update({ idObjeto: parseInt(id) }, newObjeto)

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
