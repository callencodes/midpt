const router = require('express').Router()
const google = require('../../helpers/google')
const calculateMidpoint = require('../../utils/calculateMidpoint').calculateMidpoint

/* POST midpoint */
router.post('/find-midpoint', async (req, res) => {
  try {
    const addr1 = req.body.addr1
    const addr2 = req.body.addr2
    const destType = req.body.destType
    const maxRadius = req.body.maxRadius

    const params1 = {
      "address": addr1,
      "key": process.env.API_KEY
    }

    const params2 = {
      "address": addr2,
      "key": process.env.API_KEY
    }

    let r1 = await google.geocode(process.env.GEOCODE_URL, params1)
    const loc1 = r1.results[0].geometry.location
    
    let r2 = await google.geocode(process.env.GEOCODE_URL, params2)
    const loc2 = r2.results[0].geometry.location
    const midpoint = calculateMidpoint(loc1, loc2)

    const params3 = {
      "radius": maxRadius,
      "type": destType,
      "location": `${midpoint.lat}, ${midpoint.lng}`,
      "key": process.env.API_KEY
    }

    const r3 = await google.geocode(process.env.PLACES_URL, params=params3)
    let filteredResults = []
    for (const result of r3.results) {
      const businessStatus = result.business_status
      const location = result.geometry.location
      const name = result.name
      const openingHours = result.opening_hours
      const placeId = result.place_id
      const types = result.types
      const address = result.vicinity
      filteredResults.push({
        businessStatus,
        location,
        name,
        openingHours,
        placeId,
        types,
        address
      })
    }

    res.json({
      "midpoint": midpoint,
      "results": filteredResults
    })
  } catch (err) {
    console.error(`Error while getting midpoint: ${err.message}`)
  }
})

module.exports = router