'use strict'

const Handlers = require('../handlers')

const routes = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: Handlers.getFrontpage,
      description: 'Show the frontpage',
      auth: false
    }
  }
]

module.exports = routes
