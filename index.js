const PORT = 8000
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
// morgan will help debug the backend a little better. It is a logger
const fetch = require('node-fetch')

require('dotenv').config()
// per the usage docs

morgan('tiny')
// per the docs

const app = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

// get all the restaurant data

app.get('/burgers')


app.listen(PORT, () => console.log(`server is running off PORT ${PORT}`))





