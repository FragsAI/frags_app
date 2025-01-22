// Temporary test code
const express = require('express')
const app = express()
require('dotenv').config()


app.get('/', (request, response) => {
    response.send("Hello World!")
})


module.exports = app
