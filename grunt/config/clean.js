'use strict';

var path = require('path');

module.exports = function (grunt, options) {

  // this is the grunt configuration object
  return {

    dist: options.folders.dist,
    tmp:  options.folders.tmp,

    dev: [
      path.join(options.folders.app, 'locales/*.json'),
      path.join(options.folders.app, 'assets/icons.svg'),
      path.join(options.folders.app, 'assets/icons-demo.html'),
    ]

  };

};
