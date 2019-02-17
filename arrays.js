var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyStr = "peanuts"
function addElementToBeginningOfArray(chocolateBars, candyStr) {
  return [candyStr, ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, candyStr) {
  return chocolateBars.unshift(candyStr);
}
