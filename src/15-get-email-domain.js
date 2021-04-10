/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const data = email.split('@');
  // or match with regexp = /@([^@])+/g
  return data[data.length - 1];
}

module.exports = getEmailDomain;
