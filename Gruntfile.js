'use strict';

var path = require('path');

// https://github.com/shootaroo/jit-grunt

module.exports = function(grunt) {

  //
  // Grunt utilities
  //
  var timeGrunt          = require('time-grunt');
  var loadGruntConfig    = require('load-grunt-config');


  var appData = {
    // package: require('package.json') // automatically added

    folders: {
      // source application folder
      app: 'app',

      // folder used for distribution build
      dist: 'public',

      // to be processed resources ( like SVG or language files )
      resources: 'resources',

      // temporary folder
      tmp: '.tmp'
    }

  };

  // load time-grunt for running time analysis
  timeGrunt(grunt);

  // execute grunt-config
  loadGruntConfig(grunt, {
    // path to task.js files, defaults to grunt dir
    configPath: path.join(__dirname, '.grunt/config'),

    // additional data
    data: appData

  });

};
