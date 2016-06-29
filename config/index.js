'use strict'

// For OpenLDAP:
// searchFilter: process.env.LOG_SKOLESKYSS_LDAP_SEARCH_FILTER || '(uid={{username}})'
// For Active Directory:
// searchFilter: '(sAMAccountName={{username}})'

const path = require('path')

function ldapTlsSettings () {
  const fs = require('fs')
  var config = false

  if (process.env.LOG_SKOLESKYSS_LDAP_TLS_SETTINGS) {
    config = {
      rejectUnauthorized: process.env.LOG_SKOLESKYSS_LDAP_TLS_REJECT_UNAUTHORIZED ? true : false, // eslint-disable-line no-unneeded-ternary
      ca: [
        fs.readFileSync(path.join(__dirname, process.env.LOG_SKOLESKYSS_LDAP_TLS_CA_PATH))
      ]
    }
  }

  return config
}

const config = {
  LOG_SKOLESKYSS_SERVER_PORT_WEB: process.env.LOG_SKOLESKYSS_SERVER_PORT_WEB || 8000,
  LOG_SKOLESKYSS_DB_CONNECTION_LOG: process.env.LOG_SKOLESKYSS_DB_CONNECTION_LOG || 'mongodb://localhost/skoleskyss',
  LOG_SKOLESKYSS_JWT_SECRET: process.env.LOG_SKOLESKYSS_JWT_SECRET || 'Louie Louie, oh no, I got to go. Louie Louie, oh no, I got to go',
  LOG_SKOLESKYSS_COOKIE_SECRET: process.env.LOG_SKOLESKYSS_COOKIE_SECRET || 'Louie Louie, oh no, I got to go. Louie Louie, oh no, I got to go',
  LOG_SKOLESKYSS_YAR_SECRET: process.env.LOG_SKOLESKYSS_YAR_SECRET || 'Louie Louie, oh no, I got to go. Louie Louie, oh no, I got to go',
  LOG_SKOLESKYSS_GITHUB_FEEDBACK_URL: process.env.LOG_SKOLESKYSS_GITHUB_FEEDBACK_URL || 'https://api.github.com/repos/:user/:repo/issues',
  LOG_SKOLESKYSS_GITHUB_USER: process.env.LOG_SKOLESKYSS_GITHUB_USER || 'yourgithubuser',
  LOG_SKOLESKYSS_GITHUB_TOKEN: process.env.LOG_SKOLESKYSS_GITHUB_TOKEN || 'yourgithubtoken',
  LOG_SKOLESKYSS_JSONXLSX_WS: process.env.LOG_SKOLESKYSS_JSONXLSX_WS || 'https://json2xlsx.service.t-fk.no/',
  LOG_SKOLESKYSS_GET_APPLICATIONS: process.env.LOG_SKOLESKYSS_GET_APPLICATIONS || 'https://api.skoleskyss.t-fk.no/applications/',
  LDAP: {
    url: process.env.LOG_SKOLESKYSS_LDAP_URL || 'ldap://ldap.forumsys.com:389',
    bindDn: process.env.LOG_SKOLESKYSS_LDAP_BIND_DN || 'cn=read-only-admin,dc=example,dc=com',
    bindCredentials: process.env.LOG_SKOLESKYSS_LDAP_BIND_CREDENTIALS || 'password',
    searchBase: process.env.LOG_SKOLESKYSS_LDAP_SEARCH_BASE || 'dc=example,dc=com',
    searchFilter: process.env.LOG_SKOLESKYSS_LDAP_SEARCH_FILTER || '(uid={{username}})',
    tlsOptions: ldapTlsSettings()
  }
}

module.exports = config
