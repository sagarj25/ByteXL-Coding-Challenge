const express = require('express')
const cors = require('cors')          // <-- ADD
const app = express()
const routes = require('./routes')
require('./db')   // db connection

app.use(cors())                      // <-- ADD THIS LINE
app.use(express.json())
app.use('/', routes)

const PORT = 5000
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
