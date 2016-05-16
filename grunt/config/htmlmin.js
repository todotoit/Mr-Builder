'use strict';

var path = require('path');

module.exports = function (grunt, options) {

  // this is the grunt configuration object
  return {

    single: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      expand: true,
      src:  path.join(options.folders.dist, 'index.html'),
      dest: path.join(options.folders.dist, 'index.html')
    },
    multi: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      expand: true,
      cwd: options.folders.dist,
      src: ['*.html', '**/*.html', '!vendor/'], 
      dest: options.folders.dist
    }

  };

};
