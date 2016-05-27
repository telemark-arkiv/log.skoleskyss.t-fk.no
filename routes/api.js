'use strict'

const Handlers = require('../handlers/api')

const routes = [
  {
    method: 'POST',
    path: '/api/logs/{documentId}',
    config: {
      handler: Handlers.addStatusToLog,
      description: 'Adds status to log',
      auth: 'jwt'
    }
  }
]

module.exports = routes
