var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyStr = "peanuts"
function addElementToBeginningOfArray(chocolateBars, candyStr) {
  return [candyStr, ...chocolateBars]
}
