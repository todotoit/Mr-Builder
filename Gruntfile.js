'use strict';

/*
 * # Gruntfile
 *
 * This Gruntfile is supercharged with lots of cool stuff.
 * ( opinionated opinion by me of course :P )
 *
 * - It uses load-grunt-config to include all configurations splitted in single
 *   files.
 * - It uses time-grunt to compute running time for tasks, with specific analytics
 *   on time spent on loading them and on executing them.
 * - It permits overrides of configuration by project and by single user.
 *   ( USER below is the username of the logged in user of the system ).
 * - It permits defining and overriding custom task in a clean and terse way.
 *
 *
 * Take care when overriding tasks and configs: assure to modify only the right
 * behaviour, to prevent side effects.
 *
 * ===>    TIP: **Are you lost with too many tasks?? Use `grunt tasks`**    <===
 *
 * ## Task configuration
 *
 * Task configuration are loaded from ( ordered by priority ):
 *  - lib/grunt/USER
 *  - lib/grunt
 *  - .grunt/config/{{appData.type}}
 *  - .grunt/config
 *
 * Files inside these folders should comply with load-grunt-config docs
 *
 * ## Custom tasks
 *
 * This Gruntfile will include custom tasks present in ( ordered by priority ):
 *  - lib/tasks/USER
 *  - lib/tasks
 *  - .grunt/tasks/{{appData.type}}
 *  - .grunt/tasks
 *
 * You can override tasks placing a file with the same name in a folder with
 * higher priority. For example if you need to override default `build` task (
 * written in .grunt/custom/build.js ) you can place a file called build.js
 * inside lib/tasks.
 *
 * ## Reference
 *
 * http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/
 * https://quickleft.com/blog/grunt-js-tips-tricks/
 * https://quickleft.com/blog/grunt-js-custom-tasks/
 * http://slides.com/joshschumacher/grunt-logging
 */

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
  var registerGruntTasks = require('register-grunt-tasks');


  //
  // Paths for custom functionalities and configs
  //
  var customGrunt       = '.grunt/';
  var customTaskPath    = path.join(customGrunt, 'tasks');
  var taskConfigPath    = path.join(customGrunt, 'config');
  var projectFolder     = 'lib/';
  var projectConfigPath = path.join(projectFolder, 'grunt');
  var projectTaskPath   = path.join(projectFolder, 'tasks');

  var userConfigPath    = path.join(projectConfigPath, process.env.USER);
  var userTaskPath      = path.join(projectTaskPath, process.env.USER);


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
    type: 'standalone', // standalone | angular | static
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


  // execute register-grunt-tasks
  registerGruntTasks(grunt, {
    path: [
      path.join(__dirname, customTaskPath),
      path.join(__dirname, customTaskPath, appData.type),
      path.join(__dirname, projectTaskPath),
      path.join(__dirname, userTaskPath),
    ]
  });


  // load time-grunt for running time analysis
  timeGrunt(grunt);


  // execute grunt-config
  loadGruntConfig(grunt, {
    // auto grunt.initConfig
    // init: true, // defaults to true
    // path to task config.js files, defaults to grunt dir
    configPath: [
      path.join(__dirname, taskConfigPath),
      path.join(__dirname, taskConfigPath, appData.type),
      path.join(__dirname, projectConfigPath),
      path.join(__dirname, userConfigPath),
    ],
    // additional data
    data: appData
  });


  // rename availabletasks to something shorter
  grunt.renameTask('availabletasks', 'tasks');


  // bit of cleaness in the output
  grunt.verbose.writeln();

};
