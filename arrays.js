var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyStr = "peanuts"
function addElementToBeginningOfArray(chocolateBars, candyStr) {
  return [candyStr, ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, candyStr) {
  chocolateBars.unshift(candyStr);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, candyStr) {
  return [...chocolateBars, candyStr]
}
