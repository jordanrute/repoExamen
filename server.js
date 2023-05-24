import express from 'express'
import RouterNotas from './router/notas.js'

const app = express()

app.use(express.json())

const routerNotas = new RouterNotas()

app.use('/notas', routerNotas.start())

const PORT = 8080
const server = app.listen(PORT, 
    () => console.log(`Servidor express escuchando en http://localhost:${PORT}`)
)
server.on('error', error => console.log('Servidor express en error:', error) )
