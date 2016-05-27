'use strict'

const mongojs = require('mongojs')
const config = require('../config')
const dblog = mongojs(config.LOG_SKOLESKYSS_DB_CONNECTION_LOG)
const logs = dblog.collection('logs')

module.exports.getStatsTotal = function getStatsTotal (request, reply) {
  logs.find({}).count(function (error, data) {
    reply(error || data)
  })
}

module.exports.getStatsStatus = function getStatsStatus (request, reply) {
  logs.aggregate({'$unwind': '$documentStatus'}, {'$group': {'_id': '$documentStatus.status', 'total': {'$sum': 1}}})
    .sort({'total': -1}, function (error, data) {
      reply(error || data)
    })
}

module.exports.getStatsHours = function getStatsHours (request, reply) {
  logs.aggregate({'$group': {'_id': {'$hour': '$documentDate'}, 'total': {'$sum': 1}}})
    .sort({'_id': -1}, function (error, data) {
      reply(error || data)
    })
}
