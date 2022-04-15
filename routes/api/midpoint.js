const router = require('express').Router()

/* POST midpoint */
router.post('/find', async (req, res) => {
  try {
    res.json(req.body)
  } catch (err) {
    console.error(`Error while getting midpoint: ${err.message}`)
  }
})

module.exports = router