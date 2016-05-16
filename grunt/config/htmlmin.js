'use strict';

var path = require('path');

module.exports = function (grunt, options) {

  // this is the grunt configuration object
  return {

    dist: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      src:  path.join(options.folders.dist, 'index.html'),
      dest: path.join(options.folders.dist, 'index.html')
    }

  };

};
