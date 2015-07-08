'use strict';

var path = require('path');

module.exports = function (grunt, options) {

  // this is the grunt configuration object
  return {

    options: {
      dest: options.folders.dist
    },
    html: path.join(options.folders.app, 'index.html')

  };

};
