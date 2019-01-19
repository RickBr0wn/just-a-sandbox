// Pure functions
const square = x => x * x
// remember .map() returns an array, so this function DOES NOT mutate the original
const squareAll = items => items.map(square) //?

squareAll([1, 2, 3, 4, 5, 6])

// Impure functions
const impureSquare = x => {
  updateInDatabase(x)
  return x * x
}

const impureSquareAll = items => {
  for (let i = 0; i < items.length; i++) {
    items[i] = square(items[i])
  }
}
