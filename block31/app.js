console.log("test")


//import done in normal JS looks like this:
const express = require("express")

const app = express()

const PORT = 1337

app.get('/', (req, res) => {
 // res.send("This is the home page response")
 res.send("<h1>Hello World</h1>") //can send html
})

app.get('/cats', (req, res) => {
  res.send("this is my response.")
})

app.listen(PORT, () => {
  console.log("server has started on port:", PORT)
})