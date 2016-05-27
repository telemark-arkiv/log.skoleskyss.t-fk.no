'use strict'

const routes = require('./routes')
const api = require('./routes/api')
const stats = require('./routes/stats')

exports.register = function (server, options, next) {
  server.route(routes)
  server.route(api)
  server.route(stats)
  next()
}

exports.register.attributes = {
  pkg: require('./package.json')
}
