'use strict'

const tap = require('tap')
const routes = require('../../routes/stats')

tap.equal(routes.length, 4, 'There are 4 stats routes')
