'use strict'

const routes = require('./routes')
const api = require('./routes/api')

exports.register = function (server, options, next) {
  server.route(routes)
  server.route(api)
  next()
}

exports.register.attributes = {
  pkg: require('./package.json')
}
