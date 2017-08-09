'use strict'

var path = require('path')
var moment = require('moment')

module.exports = function (grunt, options) {
  var url = 'http://some/api'

  var folders = options.folders
  var config = options.config

  var date = moment().toISOString().replace(/:/g, '-').split('.')
  var key = config.fbroot // key in config file
  var pat = `fbbk/${date[0]}_${key}.json`
  var files = {}
  files[pat] = `https://${config.fbid}.firebaseio.com/${key}.json` // id in firebase project

  return {

    fetchSomeApi: {
      options: {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        parameters: {
          access_token: 'xxxxxxx'
        }
      },
      files: {
        'path/to/file.json': url
      }
    },
    fbackup: {
      options: {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      },
      files: files
    }

  }
}
