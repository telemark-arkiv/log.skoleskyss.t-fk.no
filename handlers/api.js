'use strict'

const mongojs = require('mongojs')
const config = require('../config')
const dblog = mongojs(config.LOG_SKOLESKYSS_DB_CONNECTION_LOG)
const logs = dblog.collection('logs')

module.exports.addStatusToLog = function addStatusToLog (request, reply) {
  var documentId = request.params.documentId
  var status = request.payload
  status.timeStamp = new Date().getTime()
  logs.update({'documentId': documentId}, {'$push': {documentStatus: status}}, function (error, data) {
    reply(error || data)
  })
}

module.exports.addLog = function addLog (request, reply) {
  const payload = request.payload
  logs.save(payload, function (error, data) {
    reply(error || data)
  })
}
