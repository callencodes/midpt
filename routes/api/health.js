const router = require('express').Router()

/* GET health */
router.get('/', async (req, res) => {
  res.json({
    alive: true,
    environment: process.env.ENVIRONMENT || 'localdev'
  })
})

module.exports = router