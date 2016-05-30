'use strict';

var path = require('path');

module.exports = function (grunt, options) {

  // this is the grunt configuration object
  return {

    app:{
      files:[
        {
          expand: true,
          cwd: path.join(options.folders.dev, ''),
          src: ['**/*'], 
          dest: options.folders.app
        }
      ]
    },

    dist: {
      files: [
        {
          src:  path.join(options.folders.app, 'index.html'),
          dest: path.join(options.folders.dist, 'index.html')
        },
        {
          expand: true,
          cwd: options.folders.app,
          src:  path.join('assets', 'imgs', '*.{jpg,png,bmp,gif}'),
          dest: path.join(options.folders.dist)
        },
        {
          expand: true,
          cwd: options.folders.app,
          src:  path.join('assets', 'fonts', '*'),
          dest: path.join(options.folders.dist)
        }
      ]
    },

  };

};
