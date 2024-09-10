function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  // Generate a random integer between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
