const express = require('express')
const app = express()

app.get('/', (req,res) => {
  res.send('Midpt Homepage')
})


app.listen(3000, () => (
  console.log(`Listening on 3000`)
))