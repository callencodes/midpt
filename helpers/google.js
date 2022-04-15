const axios = require('axios')

const geocode = async (url, params) => {
  try {
    const res = await axios.get(url,{ params: params })
    return res.data
  } catch (err) {
    console.error(`Error in google helper: ${err}`)
  }
}

module.exports = {
  geocode
}