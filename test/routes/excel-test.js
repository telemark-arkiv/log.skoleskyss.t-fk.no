'use strict'

const tap = require('tap')
const routes = require('../../routes/excel')

tap.equal(routes.length, 2, 'There are 2 stats routes')
