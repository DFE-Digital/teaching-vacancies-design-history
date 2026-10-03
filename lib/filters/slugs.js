/**
 * Find items in an array that match the slugs
 *
 * @param {Array} array Array to filter
 * @param {Array} slugs Array of slugs (strings)
 * @return {Array} Filtered array
 *
 */
module.exports = (array, slugs) => {
  if (!Array.isArray(array) || !Array.isArray(slugs)) {
    return []
  }

  return array.filter(item => {
    return slugs.includes(item.fileSlug)
  })
}
