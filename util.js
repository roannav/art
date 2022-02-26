/////////////////// MATH /////////////////////////////////////

// returns [min, max],  both are inclusive.
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

