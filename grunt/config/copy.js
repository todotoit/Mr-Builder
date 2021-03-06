'use strict'

var path = require('path')

module.exports = function (grunt, options) {
  // this is the grunt configuration object
  return {

    app: {
      files: [
        {
          expand: true,
          cwd: options.folders.dev,
          src: ['**/*'],
          dest: options.folders.app
        }
      ]
    },

    ver: {
      files: [
        {
          expand: true,
          cwd: options.folders.dist,
          src: ['**/*'],
          dest: path.join(options.folders.dist, options.version)
        }
      ]
    },

    dist: {
      files: [
        {
          expand: true,
          cwd: options.folders.app,
          src: ['*.html', '**/*.html', '!node_modules/**/*'],
          dest: options.folders.dist
        },
        {
          expand: true,
          cwd: options.folders.app,
          src: path.join('assets', '**/*'),
          dest: path.join(options.folders.dist)
        },
        {
          expand: true,
          cwd: path.join(options.folders.app, 'css'),
          src: path.join('assets', '**/*'),
          dest: path.join(options.folders.dist)
        },
        {
          expand: true,
          cwd: options.folders.app,
          src: '*.js',
          dest: path.join(options.folders.dist)
        }
      ]
    },

    pub: {
      files: [
        {
          expand: true,
          cwd: options.folders.dist,
          src: ['**/*'],
          dest: options.folders.pub
        }
      ]
    }

  }
}
