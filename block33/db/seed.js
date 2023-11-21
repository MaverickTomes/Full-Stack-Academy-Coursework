/*
  Seed file - Goal:
    -connect to our database
    -create the tables and load in any intial data that someone would need
       to start using our app.

  1. CREATE the proper tables
  2. Initialize tables with an starting values (optional)
*/

const client = require('./client')
const chalk = require('chalk')


async function  dropTables(){}

async function createTables() {}

async function createOwners() {}

async function createPets() {}

async function seed() {
  try {
  client.connect(); // function that establishes connection to the database
  console.log(chalk.greenBright('Connected to the DB'))

  await dropTables()
  console.log(chalk.greenBright('Dropped tables...'))
  } catch(error) {
    console.log('Error in seed():', error.message)
  } finally {
    client.end()
  }
}
seed()