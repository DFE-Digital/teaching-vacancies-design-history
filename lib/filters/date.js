const { DateTime } = require('luxon')

/**
 * Format a date using tokens
 *
 * @param {Date|String} value Date to convert
 * @param {String} format Token-based formatting.
 * @example {{ date | date("OPTIONAL FORMAT STRING") }}
 *
 */
module.exports = (value, format) => {
  let date

  if (value === 'now') {
    date = DateTime.local().setZone('utc').setLocale('en-GB')
  } else if (value instanceof Date) {
    date = DateTime.fromJSDate(value, {
      locale: 'en-GB',
      zone: 'utc'
    })
  } else if (typeof value === 'string') {
    date = DateTime.fromISO(value, {
      locale: 'en-GB',
      zone: 'utc'
    })
  } else {
    return ''
  }

  if (!date.isValid) {
    return ''
  }

  if (format) {
    return date.toFormat(format)
  }

  return date.toUTC().toISO()
}
