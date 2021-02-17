import 'reflect-metadata'

import express from 'express'
import toolsRouter from './routes/tools.routes'

import './database'

const app = express()

app.use(express.json())
app.use(toolsRouter)

app.listen(3000, () => {
    console.log('Server is running...')
})
