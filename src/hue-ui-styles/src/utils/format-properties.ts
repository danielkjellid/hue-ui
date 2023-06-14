/**
 * Format passed string as a css var. Basically just adds a '--' prefix.
 * @param {string} str The string to format.
 * @returns {string} The formatted string.
 */
export const formatAsCSSVar = (str: string) => `--${str}`

/**
 * Format passed string as kebab-case.
 * @param {string} str The string to format.
 * @returns {string} The formatted string.
 */
export const formatProperty = (str: string) =>
  str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase())

/**
 * Take a object and format the keys as kebab case css vars. E.g. randomKey would be --random-key.
 * @param {{obj: Record<string, any> | undefined}} obj The object to format.
 * @returns {object} The modified object.
 */
export const formatProperties = ({ obj }: { obj: Record<string, any> | undefined }) => {
  const modifiedObj = {}

  // Nothing to do, return early.
  if (!obj) {
    return modifiedObj
  }

  Object.entries(obj).map(([key, value]) => {
    modifiedObj[formatAsCSSVar(formatProperty(key))] = value
    return undefined
  })

  return modifiedObj
}
