'use strict'

const tap = require('tap')
const handlers = require('../../handlers')

tap.equal(Object.keys(handlers).length, 8, 'There are 8 standard handlers')

tap.ok(handlers.getFrontpage, 'Handler has method getFrontpage')

tap.ok(handlers.getLogspage, 'Handler has method getLogspage')

tap.ok(handlers.showLogin, 'Handler has method showLogin')

tap.ok(handlers.doLogin, 'Handler has method doLogin')

tap.ok(handlers.doLogout, 'Handler has method doLogout')

tap.ok(handlers.getselectedtimeperiod, 'Handler has method getselectedtimeperiod')

tap.ok(handlers.showStatistics, 'Handler has method showStatistics')

tap.ok(handlers.getselectedtimeperiod, 'Handler has method getselectedtimeperiod')
