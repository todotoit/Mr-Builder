'use strict';

var path = require('path');

module.exports = function (grunt, options) {

  // this is the grunt configuration object
  return {

    options: {
      // sourceMap: true,
      // sourceMapIn: function(uglifySource) {
      //   console.log(uglifySource)
      //   return uglifySource + '.map';
      // },
      // sourceMapIncludeSources: true
    },
    generated: {
      mangle:    true,  // invert for debug
      beautify:  false, // invert for debug
      sourceMap: true   // generated source maps for debug
    }

  };

};
