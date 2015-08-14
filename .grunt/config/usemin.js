'use strict';

var path = require('path');

module.exports = function (grunt, options) {

  // this is the grunt configuration object
  return {

    html: [ path.join(options.folders.dist, 'index.html') ]

  };

};
