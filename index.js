const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/status', (req,res) => {
  res.json({
    "status": "alive"
  })
})


app.listen(port, () => (
  console.log(`Listening on ${port}`)
))