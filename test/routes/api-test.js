'use strict'

const tap = require('tap')
const routes = require('../../routes/api')

tap.equal(routes.length, 2, 'There are 2 api routes')
