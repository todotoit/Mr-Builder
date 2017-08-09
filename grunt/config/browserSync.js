'use strict'

var path = require('path')

module.exports = function (grunt, options) {
  // this is the grunt configuration object
  return {

    dev: {
      bsFiles: {
        src: [
          options.folders.dev + '/**/*'
        ]
      },
      options: {
        server: {
          baseDir: options.folders.dev // options.rootPath,
        }
      }
    }

  }
}
