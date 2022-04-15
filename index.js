const express = require('express')
const bodyParser = require('body-parser')

const healthRouter = require('./routes/api/health')
const midpointRouter = require('./routes/api/midpoint')

const app = express()
const port = process.env.PORT || 3000

// Middleware
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

// Routes
app.use('/api/health', healthRouter)
app.use('/api/midpoint', midpointRouter)

app.listen(port, () =>  {
  console.log(`Listening on ${port}`)
})

module.exports = app
