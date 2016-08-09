'use strict'

const Handlers = require('../handlers')
var handlers = require('../handlers')
var Joi = require('joi')

const routes = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: Handlers.getFrontpage,
      description: 'Show the frontpage'
    }
  },
  {
    method: 'GET',
    path: '/logs',
    config: {
      handler: Handlers.getLogspage,
      description: 'Show the logspage'
    }
  },
  {
    method: 'GET',
    path: '/login',
    config: {
      handler: Handlers.showLogin,
      description: 'Show the Logingpage',
      auth: false
    }
  },
  {
    method: 'POST',
    path: '/login',
    config: {
      handler: Handlers.doLogin,
      description: 'Login',
      auth: false
    }
  },
  {
    method: 'GET',
    path: '/logout',
    config: {
      handler: Handlers.doLogout
    }
  },
  {
    method: 'GET',
    path: '/listapplications',
    config: {
      auth: false,
      validate: {
        query:
        {
          from: Joi.string(),
          to: Joi.string()
        }
      },
      handler: handlers.getselectedtimeperiod,
      description: 'Show the frontpage with tableinformation'
    }
  },
  {
    method: 'GET',
    path: '/excel',
    config: {
      auth: false,
      handler: handlers.exportTableToExcel,
      description: 'Send table to XLSX-converter'
    }
  },
  {
    method: 'GET',
    path: '/showsomestats',
    config: {
      auth: false,
      handler: Handlers.showStatistics,
      description: 'Show some stats'
    }
  }
]

module.exports = routes
