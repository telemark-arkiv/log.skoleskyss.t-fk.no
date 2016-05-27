'use strict'

const tap = require('tap')
const handlers = require('../../handlers/stats')

tap.equal(Object.keys(handlers).length, 4, 'There are 4 stats handlers')

tap.ok(handlers.getStatsTotal, 'Handler has method getStatsTotal')

tap.ok(handlers.getStatsStatus, 'Handler has method getStatsStatus')

tap.ok(handlers.getStatsHours, 'Handler has method getStatsHours')

tap.ok(handlers.showStats, 'Handler has method showStats')
