/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  // throw new Error('Not implemented');
  let smallerInd = 0;
  let biggerInd = array.length - 1;
  let middleInd = Math.floor((smallerInd + biggerInd) / 2);

  while (array[middleInd] !== value) {
    if (array[middleInd] > value) {
      biggerInd = middleInd - 1;
    } else {
      smallerInd = middleInd + 1;
    }
    middleInd = Math.floor((smallerInd + biggerInd) / 2);
  }
  return middleInd;
}

module.exports = findIndex;
