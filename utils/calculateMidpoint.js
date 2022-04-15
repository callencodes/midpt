function calculateMidpoint(loc1, loc2) {
  /* Input values as degrees
    Long = X
    Lat = Y
    Convert to radians
  */
  const pi = Math.PI
  const rad = pi/180
  const degrees = 180/pi
  const lat1 = loc1['lat'] * rad
  const lng1 = loc1['lng'] * rad
  const lat2 = loc2['lat'] * rad
  const lng2 = loc2['lng'] * rad

  bx = Math.cos(lat2) * Math.cos(lng2 - lng1)
  by = Math.cos(lat2) * Math.sin(lng2 - lng1)
  let lat3 = Math.atan2(Math.sin(lat1) + Math.sin(lat2), Math.sqrt((Math.cos(lat1) + bx) * (Math.cos(lat1) + bx) + by**2))
  let lng3 = lng1 + Math.atan2(by, Math.cos(lat1) + bx)
  lat3 = lat3 * degrees
  lng3 = lng3 * degrees
  
  return {"lat": lat3.toFixed(2), "lng": lng3.toFixed(2)}
}

module.exports = {
  calculateMidpoint
}
