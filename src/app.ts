import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import perfilRoutes from './routes/perfil.router'
import objetoRoutes from './routes/objeto.router'
import mascotaRoutes from './routes/mascota.router'
import provinciaRouter from './routes/provincia.router'
import departamentoRouter from './routes/departamento.router'
import especieRouter from './routes/especie.router'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use('/api', perfilRoutes)
app.use('/api', objetoRoutes)
app.use('/api', mascotaRoutes)
app.use('/api', provinciaRouter)
app.use('/api', departamentoRouter)
app.use('/api', especieRouter)

export default app
