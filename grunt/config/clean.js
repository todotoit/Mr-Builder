'use strict'

var path = require('path')

module.exports = function (grunt, options) {
  var pubyes = path.join(options.folders.dist, '/*')
  var pubno = '!' + path.join(options.folders.dist, '.*')

    // this is the grunt configuration object
  return {

    options: {
      force: false // set to true to delete fonders outside the current, dangerous, dont
    },
    dist: [options.folders.dist],
    tmp: [options.folders.tmp, options.folders.app, options.folders.grn]

  }
}
