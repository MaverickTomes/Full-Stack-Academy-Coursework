//file connects JS to our Database


const { Client } = require('pg')

const connectionString = 'http://localhost:5432/pets-demo' 

const client = new Client ({
  connectionString,
})

module.exports = client