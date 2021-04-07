/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // split  each str into array depending on its length and
  // by loop for each elem in smaller array find if the letter includes in longer arr and delete it
  const short = s1.length <= s2.length ? s1 : s2;
  const long = s1.length > s2.length ? s1 : s2;
  const shortArr = short.split('');
  const longArr = long.split('');
  let counter = 0;

  shortArr.forEach((shortLetter) => {
    if (longArr.includes(shortLetter)) {
      const index = longArr.indexOf(shortLetter);
      counter++;
      longArr.splice(index, 1);
    }
  });

  return counter;
}
module.exports = getCommonCharacterCount;
