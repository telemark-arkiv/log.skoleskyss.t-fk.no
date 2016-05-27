'use strict'

const mongojs = require('mongojs')
const config = require('../config')
const pkg = require('../package.json')
const dblog = mongojs(config.LOG_SKOLESKYSS_DB_CONNECTION_LOG)
const logs = dblog.collection('logs')

module.exports.getFrontpage = function getFrontpage (request, reply) {
  logs.find({}).sort({timeStamp: -1}).limit(20, function (error, data) {
    if (error) {
      console.error(error)
    }
    const viewOptions = {
      version: pkg.version,
      versionName: pkg.louie.versionName,
      versionVideoUrl: pkg.louie.versionVideoUrl,
      systemName: pkg.louie.systemName,
      githubUrl: pkg.repository.url,
      credentials: request.auth.credentials,
      logs: data || []
    }
    reply.view('index', viewOptions)
  })
}

module.exports.showLogin = function showLogin (request, reply) {
  var viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url
  }
  reply.view('login', viewOptions, {layout: 'layout-login'})
}

module.exports.doLogin = function doLogin (request, reply) {
  var jwt = require('jsonwebtoken')
  var payload = request.payload
  var username = payload.username
  var password = payload.password
  var LdapAuth = require('ldapauth-fork')
  var auth = new LdapAuth(config.LDAP)

  auth.authenticate(username, password, function (err, user) {
    if (err) {
      console.error(JSON.stringify(err))
      if (err.name || /no such user/.test(err)) {
        var viewOptions = {
          version: pkg.version,
          versionName: pkg.louie.versionName,
          versionVideoUrl: pkg.louie.versionVideoUrl,
          systemName: pkg.louie.systemName,
          githubUrl: pkg.repository.url,
          loginErrorMessage: err.name || 'InvalidCredentialsError'
        }
        reply.view('login', viewOptions, {layout: 'layout-login'})
      }
    } else {
      var tokenOptions = {
        expiresIn: '1h',
        issuer: 'https://auth.t-fk.no'
      }
      var data = {
        cn: user.cn,
        userId: user.sAMAccountName || user.uid || ''
      }
      var token = jwt.sign(data, config.LOG_SKOLESKYSS_JWT_SECRET, tokenOptions)
      request.cookieAuth.set({
        token: token,
        isAuthenticated: true,
        data: data
      })
      auth.close(function (err) {
        if (err) {
          console.error(err)
        }
      })
      reply.redirect('/')
    }
  })
}

module.exports.doLogout = function doLogout (request, reply) {
  request.cookieAuth.clear()
  reply.redirect('/')
}
