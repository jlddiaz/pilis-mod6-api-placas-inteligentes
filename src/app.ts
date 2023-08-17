import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import userRoutes from './routes/user.router'
import objetRoutes from './routes/objet.router'
import petRoutes from './routes/pet.router'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use('/api', userRoutes)
app.use('/api', objetRoutes)
app.use('/api', petRoutes)

export default app
