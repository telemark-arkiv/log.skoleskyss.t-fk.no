'use strict'

module.exports = function (statuses) {
  const latest = statuses[statuses.length - 1]
  return latest.status || ''
}
