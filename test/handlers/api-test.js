'use strict'

const tap = require('tap')
const handlers = require('../../handlers/api')

tap.equal(Object.keys(handlers).length, 1, 'There are 1 api handlers')

tap.ok(handlers.addStatusToLog, 'Handler has method addStatusToLog')
