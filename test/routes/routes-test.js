'use strict'

const tap = require('tap')
const routes = require('../../routes')

tap.equal(routes.length, 8, 'There are 8 standard routes')
