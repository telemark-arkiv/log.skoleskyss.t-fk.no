'use strict'

const Handlers = require('../handlers/excel')

module.exports = [
  {
    method: 'POST',
    path: '/excel',
    config: {
      handler: Handlers.createExcelFile,
      description: 'Create Excelfile'
    }
  },
  {
    method: 'GET',
    path: '/excel',
    config: {
      handler: Handlers.showExcelForm,
      description: 'Show form for excel'
    }
  }
]
