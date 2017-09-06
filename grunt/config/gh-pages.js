'use strict'

var path = require('path')

module.exports = function (grunt, options) {
  var config = options.config

  return {

    options: {
      base: options.folders.pub,
      message: 'Git-Pages Deploy'
    },
    'changelog': {
      options: {
        add: true
      },
      src: ['**']
    },
    'gh-pages': {
      options: {
        branch: 'gh-pages',
        repo: config.repo
      },
      src: ['**']
    }

  }
}
