'use strict'

const tap = require('tap')
const routes = require('../../routes')

tap.equal(routes.length, 6, 'There are 6 standard routes')
