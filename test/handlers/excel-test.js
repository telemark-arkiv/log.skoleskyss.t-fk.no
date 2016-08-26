'use strict'

const tap = require('tap')
const handlers = require('../../handlers/excel')

tap.equal(Object.keys(handlers).length, 2, 'There are 2 excel handlers')

tap.ok(handlers.showExcelForm, 'Handler has method showExcelForm')

tap.ok(handlers.createExcelFile, 'Handler has method createExcelFile')
