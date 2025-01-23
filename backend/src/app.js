const express = require('express')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World' })
})

app.use(middleware.unknownEndpoint)

module.exports = app
