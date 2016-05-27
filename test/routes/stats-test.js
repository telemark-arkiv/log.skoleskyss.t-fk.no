'use strict'

const tap = require('tap')
const routes = require('../../routes/stats')

tap.equal(routes.length, 3, 'There are 3 stats routes')
