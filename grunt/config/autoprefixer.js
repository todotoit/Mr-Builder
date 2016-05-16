'use strict';

var path = require('path');

module.exports = function (grunt, options) {

  // this is the grunt configuration object
  return {

    dist: {
      src:  path.join(options.folders.tmp, 'concat/**/*.css' ),
      // dest: path.join(options.folders.tmp, 'concat/css/app.css' ),
    }

  };

};
