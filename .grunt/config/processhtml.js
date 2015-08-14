'use strict';

var path = require('path');

module.exports = function (grunt, options) {

  // this is the grunt configuration object
  return {

    options: {
      commentMarker: 'process'
    },
    dist:{
      dest: path.join(options.folders.dist, 'index.html'),
      src:  [ path.join(options.folders.dist, 'index.html') ]
    }

  };

};
