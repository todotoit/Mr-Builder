'use strict';

var path = require('path');

module.exports = function (grunt, options) {

  // this is the grunt configuration object
  return {

    index:{
      options: {
        commentMarker: 'process'
      },
      dist:{
        dest: path.join(options.folders.dist, 'index.html'),
        src:  [ path.join(options.folders.dist, 'index.html') ]
      }
    },
    html:{
      options: {
        commentMarker: 'process',
        recursive:true,
        data:options
      },
      dist:{
        expand: true,
        cwd: options.folders.dist,
        src: ['*.html', '**/*.html'], 
        dest: options.folders.dist,
        options:{
          recursive:true,
          includeBase: options.folders.dist
        }
      }
    }

  };

};
