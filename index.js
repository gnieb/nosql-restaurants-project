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

app.get('/restaurants', (req, resp) => {
    const url = process.env.ENDPOINT
    const options = {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'X-Cassandra-Token' : process.env.ASTRA_TOKEN
        }
    }
    fetch(url, options)
    .then(resp => resp.json())
    .then(json => resp.json(json))
    .catch(err => console.log("errors: ",err))

})

function errorHandler(error, req, resp,) {
    resp.status(resp.statusCode || 500) 
    resp.json({
        message: error.message
    })
}


app.use(errorHandler)


app.listen(PORT, () => console.log(`server is running off PORT ${PORT}`))





