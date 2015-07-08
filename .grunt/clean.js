'use strict';

var path = require('path');

module.exports = function (grunt, options) {

  // this is the grunt configuration object
  return {

    dist: options.folders.dist,
    tmp:  options.folders.tmp,

    devLocales: path.join(options.folders.app, 'locales')

  };

};
