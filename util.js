/////////////////// MATH /////////////////////////////////////

// returns [min, max],  both are inclusive.
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// convert angles from degrees to radians
function deg2Rad( _degrees) {
  return _degrees * Math.PI / 180;
}

