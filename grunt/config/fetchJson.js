'use strict'

var path = require('path')
var moment = require('moment')

module.exports = function (grunt, options) {
  var url = 'http://some/api'

  var folders = options.folders
  var config = options.config

  var res = {default: {}}

  var fb = config.firebase
  if (fb) {
    var date = moment().toISOString().replace(/:/g, '-').split('.')
    var pat = path.join(folders.dev, `firebase_backup/${date[0]}_${fb.name}.json`)
    var files = {}
    files[pat] = fb.root
    res.fbackup = {
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

  var cont = config.contentful
  if (cont) {
    var contentPath = path.join(folders.app, `json/${cont.type}.json`)
    var contentOb = {}
    contentOb[contentPath] = `https://cdn.contentful.com/spaces/${cont.space}/entries`
    res.contentful = {
      options: {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        parameters: {
          access_token: cont.token,
          content_type: cont.type
        }
      },
      files: contentOb
    }
  }

  return res
}
