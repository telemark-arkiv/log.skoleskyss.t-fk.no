'use strict'

const config = {
  LOG_SKOLESKYSS_SERVER_PORT_WEB: process.env.LOG_SKOLESKYSS_SERVER_PORT_WEB || 8000,
  LOG_SKOLESKYSS_DB_CONNECTION_QUEUE: process.env.LOG_SKOLESKYSS_DB_CONNECTION_QUEUE || 'mongodb://localhost/skoleskyss',
  LOG_SKOLESKYSS_JWT_SECRET: process.env.LOG_SKOLESKYSS_JWT_SECRET || 'Louie Louie, oh no, I got to go',
  LOG_SKOLESKYSS_COOKIE_SECRET: process.env.LOG_SKOLESKYSS_COOKIE_SECRET || 'Louie Louie, oh no, I got to go. Louie Louie, oh no, I got to go',
  LOG_SKOLESKYSS_YAR_SECRET: process.env.LOG_SKOLESKYSS_YAR_SECRET || 'Louie Louie, oh no, I got to go. Louie Louie, oh no, I got to go',
  LOG_SKOLESKYSS_GITHUB_FEEDBACK_URL: process.env.LOG_SKOLESKYSS_GITHUB_FEEDBACK_URL || 'https://api.github.com/repos/:user/:repo/issues',
  LOG_SKOLESKYSS_GITHUB_USER: process.env.LOG_SKOLESKYSS_GITHUB_USER || 'yourgithubuser',
  LOG_SKOLESKYSS_GITHUB_TOKEN: process.env.LOG_SKOLESKYSS_GITHUB_TOKEN || 'yourgithubtoken'
}

module.exports = config
