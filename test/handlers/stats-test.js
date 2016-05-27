'use strict'

const tap = require('tap')
const handlers = require('../../handlers/stats')

tap.equal(Object.keys(handlers).length, 3, 'There are 3 stats handlers')

tap.ok(handlers.getStatsTotal, 'Handler has method getStatsTotal')

tap.ok(handlers.getStatsStatus, 'Handler has method getStatsStatus')

tap.ok(handlers.getStatsHours, 'Handler has method getStatsHours')
