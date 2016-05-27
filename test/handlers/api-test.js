'use strict'

const tap = require('tap')
const handlers = require('../../handlers/api')

tap.equal(Object.keys(handlers).length, 2, 'There are 2 api handlers')

tap.ok(handlers.addStatusToLog, 'Handler has method addStatusToLog')

tap.ok(handlers.addLog, 'Handler has method addLog')
