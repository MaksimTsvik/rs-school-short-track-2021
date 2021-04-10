/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(string) {
  // throw new Error('Not implemented');
  let resultStr = '';
  let counter = 1;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1] && i < string.length - 1) {
      counter++;
    } else {
      if (counter === 1) resultStr += string[i];
      else resultStr += `${counter}${string[i]}`;
      counter = 1;
    }
  }
  return resultStr;
}

module.exports = encodeLine;
