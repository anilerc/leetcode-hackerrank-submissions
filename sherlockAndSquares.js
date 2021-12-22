function squares(a, b) {

const lowerBound = Math.ceil(Math.sqrt(a));
const upperBound = Math.floor(Math.sqrt(b));

const numbersInBetween = (upperBound-lowerBound) + 1;

return numbersInBetween;

}

// trick: search for the # of numbers in the range of sqrt(a) - sqrt(b); instead of operating with a-b range
