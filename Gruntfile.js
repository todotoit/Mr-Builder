'use strict';

var path = require('path');

// https://github.com/shootaroo/jit-grunt

module.exports = function(grunt) {

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

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {

    // path to task.js files, defaults to grunt dir
    configPath: path.join(__dirname, '.grunt'),

    data: appData

  });
};
