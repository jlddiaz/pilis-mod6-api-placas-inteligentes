import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import usuarioRoutes from './routes/usuario.router'
import objetoRoutes from './routes/objeto.router'
import mascotaRoutes from './routes/mascota.router'
import infoRouter from './routes/info.router'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use('/api', usuarioRoutes)
app.use('/api', objetoRoutes)
app.use('/api', mascotaRoutes)
app.use('/api', infoRouter)

export default app
