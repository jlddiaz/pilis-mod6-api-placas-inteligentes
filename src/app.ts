import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import 'reflect-metadata'

import perfilRoutes from './routes/perfil.router'
import objetoRoutes from './routes/objeto.router'
import mascotaRoutes from './routes/mascota.router'
import provinciaRouter from './routes/provincia.router'
import departamentoRouter from './routes/departamento.router'
import especieRouter from './routes/especie.router'
import usuarioRouter from './routes/usuario.router'

import passportMiddleware from './middewares/passport'
import passport from 'passport'
import passportLocal from 'passport-local'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

//Agregar para jwt
app.use(passport.initialize())
passport.use(passportMiddleware)

app.use('/api', perfilRoutes)
app.use('/api', objetoRoutes)
app.use('/api', mascotaRoutes)
app.use('/api', provinciaRouter)
app.use('/api', departamentoRouter)
app.use('/api', especieRouter)
app.use('/api', usuarioRouter)

export default app
