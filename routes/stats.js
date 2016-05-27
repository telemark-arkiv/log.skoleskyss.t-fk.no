'use strict'

const Handlers = require('../handlers/stats')

const routes = [
  {
    method: 'GET',
    path: '/stats/total',
    config: {
      handler: Handlers.getStatsTotal,
      description: 'Statistics for total logs'
    }
  },
  {
    method: 'GET',
    path: '/stats/status',
    config: {
      handler: Handlers.getStatsStatus,
      description: 'Statistics for different statuses'
    }
  },
  {
    method: 'GET',
    path: '/stats/hours',
    config: {
      handler: Handlers.getStatsHours,
      description: 'Statistics for logs per hour of the day'
    }
  }
]

module.exports = routes
