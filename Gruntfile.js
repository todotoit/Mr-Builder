'use strict';

var _    = require('lodash');
var fse  = require('fs-extra');
var path = require('path');

// https://github.com/shootaroo/jit-grunt

module.exports = function(grunt) {

  //
  // Grunt utilities
  //
  var timeGrunt          = require('time-grunt');
  var loadGruntConfig    = require('load-grunt-config');


  //
  // Paths for custom functionalities and configs
  //
  var customGrunt       = '.grunt/';
  var taskConfigPath    = path.join(customGrunt, 'config');
  var projectFolder     = 'lib/';
  var projectConfigPath = path.join(projectFolder, 'grunt');

  var userConfigPath    = path.join(projectConfigPath, process.env.USER);


  //
  // Load package.json
  //
  var pkg = grunt.file.readJSON('package.json');


  //
  // Default option object
  //
  var appData = {
    // package: grunt.file.readJSON('package.json') // automatically added by load-grunt-config
    // choose type of application; enable and disable specific tasks
    type: 'simple', // simple | angular | static
    // path to different resources
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


  // override appData with package.json config values
  var configs = pkg.config;
  appData = _.defaultsDeep({}, configs, appData);


  grunt.log.writeln('Running toolchain for type: ' + appData.type.cyan);


  // verify if a specific json config for this app type exists
  if (fse.existsSync(path.join(customGrunt, appData.type + '.json'))) {
    var toolchainTypeConfig = grunt.file.readJSON(path.join(customGrunt, appData.type + '.json'));
    // override configs with specific type config
    appData = _.defaultsDeep({}, configs, toolchainTypeConfig, appData);
  }


  // load time-grunt for running time analysis
  timeGrunt(grunt);

  // execute grunt-config
  loadGruntConfig(grunt, {
    // auto grunt.initConfig
    // init: true, // defaults to true
    // path to task config.js files, defaults to grunt dir
    configPath: [
      path.join(__dirname, taskConfigPath),
      path.join(__dirname, projectConfigPath),
      path.join(__dirname, userConfigPath),
    ],
    // additional data
    data: appData
  });

};
