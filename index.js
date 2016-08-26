'use strict'

const routes = require('./routes')
const api = require('./routes/api')
const stats = require('./routes/stats')
const excel = require('./routes/excel')

exports.register = function (server, options, next) {
  server.route(routes)
  server.route(api)
  server.route(stats)
  server.route(excel)
  next()
}

exports.register.attributes = {
  pkg: require('./package.json')
}
