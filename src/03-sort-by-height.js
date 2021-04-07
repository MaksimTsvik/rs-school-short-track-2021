/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // just split in 2 arrays and then combine together
  const minusIndex = [];
  const values = [];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      minusIndex.push(i);
    } else {
      values.push(arr[i]);
    }
  }

  values.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (minusIndex.includes(i)) {
      result.push(-1);
    } else {
      result.push(values.shift());
    }
  }

  return result;
}

module.exports = sortByHeight;
