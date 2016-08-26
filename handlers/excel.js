'use strict'

const Wreck = require('wreck')
const uuid = require('uuid')
const generateToken = require('tfk-generate-jwt')
const xlsx = require('xlsx-writestream')
const fs = require('fs')
const datePadding = require('../lib/date-padding')
const config = require('../config')
const pkg = require('../package.json')
const timestampMe = require('../lib/timestamp-me')
const token = generateToken({key: config.LOG_SKOLESKYSS_JWT_SECRET, payload: {system: 'log.skoleskyss.t-fk.no'}})
const wreckOptions = {
  json: true,
  headers: {
    Authorization: token
  }
}

module.exports.showExcelForm = (request, reply) => {
  const now = new Date()
  const today = `${now.getFullYear()}-${datePadding(now.getMonth() + 1)}-${datePadding(now.getDate())}`
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    today: today
  }
  reply.view('excel', viewOptions)
}

module.exports.createExcelFile = (request, reply) => {
  const fromDate = timestampMe(`${request.payload.fromDate} 00:00:01`)
  const toDate = timestampMe(`${request.payload.toDate} 23:59:59`)
  const url = config.LOG_SKOLESKYSS_GET_APPLICATIONS + fromDate + '/' + toDate
  console.log(url)

  Wreck.get(url, wreckOptions, function (err, data, payload) {
    if (err) {
      reply(err)
    } else {
      const uniqueName = `${uuid.v4()}.xlsx`
      const filename = `${process.cwd()}/uploads/${uniqueName}`
      xlsx.write(filename, payload, function (err) {
        if (err) {
          reply(err)
        } else {
          reply.file(filename)
            .header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
            .header('Content-Disposition', 'attachment; filename=' + uniqueName)
            .on('finish', () => {
              fs.unlink(filename)
            })
        }
      })
    }
  })
}
