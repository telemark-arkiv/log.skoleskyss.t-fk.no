'use strict'

const tap = require('tap')
const routes = require('../../routes/api')

tap.equal(routes.length, 1, 'There are 1 api routes')
