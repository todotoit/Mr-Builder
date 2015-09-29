'use strict';

var path = require('path');

module.exports = function (grunt, options) {

  // this is the grunt configuration object
  return {

    dev:{
      bsFiles: {
        src : [
          options.folders.app,
        ]
      },
      options: {
        server: {
          baseDir: path.join(options.rootPath, options.folders.app)
        },
        open: false
      }
    }

  };

};
