import { UsuarioResponseDTO } from './../dto/usuario.dto'
import { Request, Response } from 'express'
import { plainToClass } from 'class-transformer'

// -------- Agregar para jwt
import jwt from 'jsonwebtoken'
import { comparePassword, createHash } from '../helpers/bcryptHelper'
import { Usuario } from '../entities/Usuario'

const jwtSecret = 'somesecrettoken'
const jwtRefreshTokenSecret = 'somesecrettokenrefresh'
let refreshTokens: (string | undefined)[] = []

const createToken = (usuario: Usuario) => {
  // Se crean el jwt y refresh token
  const token = jwt.sign(
    { id: usuario.idUsuario, mail: usuario.mail },
    jwtSecret,
    {
      expiresIn: '120m',
    }
  )
  const refreshToken = jwt.sign({ mail: usuario.mail }, jwtRefreshTokenSecret, {
    expiresIn: '90d',
  })

  refreshTokens.push(refreshToken)
  return {
    token,
    refreshToken,
  }
}
// ----------

export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await Usuario.find()
    const usuariosResponse = usuarios.map((usuario) => {
      return plainToClass(UsuarioResponseDTO, usuario, {
        excludeExtraneousValues: true,
      })
    })
    return res.json(usuariosResponse)
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

    const usuarioResponse = plainToClass(UsuarioResponseDTO, usuario, {
      excludeExtraneousValues: true,
    })
    return res.json(usuarioResponse)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  if (!req.body.mail || !req.body.password) {
    return res.status(400).json({ msg: 'Please. Send your mail and password' })
  }

  const usuario = await Usuario.findOneBy({ mail: req.body.mail })
  if (usuario) {
    return res.status(400).json({ msg: 'The User already Exists' })
  }

  const newUser = new Usuario()
  newUser.mail = req.body.mail
  newUser.password = await createHash(req.body.password)
  await newUser.save()
  const usuarioResponse = plainToClass(UsuarioResponseDTO, newUser, {
    excludeExtraneousValues: true,
  })
  return res.status(201).json(usuarioResponse)
}

export const signIn = async (
  req: Request,
  res: Response
): Promise<Response> => {
  if (!req.body.mail || !req.body.password) {
    return res.status(400).json({ msg: 'Please. Send your mail and password' })
  }

  const user = await Usuario.findOneBy({ mail: req.body.mail })
  if (!user) {
    return res.status(400).json({ msg: 'The User does not exists' })
  }

  const isMatch = await comparePassword(user, req.body.password)
  if (isMatch) {
    return res.status(200).json({...createToken(user)})
  }

  return res.status(400).json({
    msg: 'The mail or password are incorrect',
  })
}

export const protectedEndpoint = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json({ msg: 'ok' })
}

// Create new access token from refresh token
export const refresh = async (req: Request, res: Response): Promise<any> => {
  // const refreshToken = req.header("x-auth-token");

  const refreshToken = req.body.refresh

  // If token is not provided, send error message
  if (!refreshToken) {
    res.status(401).json({
      errors: [
        {
          msg: 'Token not found',
        },
      ],
    })
  }

  console.log(refreshTokens)
  // If token does not exist, send error message
  if (!refreshTokens.includes(refreshToken)) {
    res.status(403).json({
      errors: [
        {
          msg: 'Invalid refresh token',
        },
      ],
    })
  }

  try {
    const user = jwt.verify(refreshToken, jwtRefreshTokenSecret)
    // user = { email: 'jame@gmail.com', iat: 1633586290, exp: 1633586350 }
    const { mail } = <any>user

    const userFound = <Usuario>await Usuario.findOneBy({ mail: mail })
    if (!user) {
      return res.status(400).json({ msg: 'The User does not exists' })
    }

    const accessToken = jwt.sign(
      { id: userFound.idUsuario, mail: userFound.mail },
      jwtSecret,
      { expiresIn: '120s' }
    )

    res.json({ accessToken })
  } catch (error) {
    res.status(403).json({
      errors: [
        {
          msg: 'Invalid token',
        },
      ],
    })
  }
}
