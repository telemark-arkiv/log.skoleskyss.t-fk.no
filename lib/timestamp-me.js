'use strict'

module.exports = inDate => {
  const date = inDate ? new Date(inDate) : new Date()
  return date.getTime()
}
