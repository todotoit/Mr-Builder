'use strict'

var _ = require('lodash')
var fse = require('fs-extra')
var path = require('path')

// https://github.com/shootaroo/jit-grunt

module.exports = function (grunt) {
  grunt.log.writeln('Mr. Builder here at your service:')

  var on_app = grunt.option('app') // i.e. grunt build --path=app_name

  if (!on_app) {
    try {
      var last = grunt.file.readJSON(path.join(__dirname, '.last.json'))
      on_app = last.path
    } catch (e) {
      grunt.log.error('You need to specify the project path the first time, as --app=path/to/my/folder')
      process.exit()
    }
  }

  grunt.log.writeln('project path', on_app)

  grunt.file.write(path.join(__dirname, '.last.json'), JSON.stringify({path: on_app}))

  //
  // Grunt utilities
  //
  var timeGrunt = require('time-grunt')
  var loadGruntConfig = require('load-grunt-config')
  var registerGruntTasks = require('register-grunt-tasks')

  //
  // Paths for custom functionalities and configs
  //
  var customGrunt = 'grunt/'
  var customTaskPath = path.join(customGrunt, 'tasks')
  var taskConfigPath = path.join(customGrunt, 'config')
  var projectFolder = 'lib/'
  var projectConfigPath = path.join(projectFolder, 'grunt')
  var projectTaskPath = path.join(projectFolder, 'tasks')

  var userConfigPath = path.join(projectConfigPath, process.env.USER)
  var userTaskPath = path.join(projectTaskPath, process.env.USER)

  //
  // Load package.json
  //
  var pkg = grunt.file.readJSON('package.json')

  var on_env = grunt.option('env') // i.e. grunt build --env=default
  if (!on_env) on_env = 'default'

  var whichEnv
  var config = {
    dist: 'public'
  }

  try {
    var env = grunt.file.readJSON(path.join(on_app, '/app/env.json'))
    whichEnv = (env) ? env[on_env] : null
    config = env.config
  } catch (e) {
  }
  console.log(config)

  var localPkg
  try {
    localPkg = grunt.file.readJSON(path.join(on_app, '/app/package.json'))
  } catch (e) {
    localPkg = pkg
  }

  //
  // Default option object
  //
  var appData = {
    // package: grunt.file.readJSON('package.json') // automatically added by load-grunt-config
    // choose type of application; enable and disable specific tasks
    type: 'default',

    version: localPkg.version,
    pkg: localPkg,
    env: whichEnv,
    config: config,

    folders: {
      dev: path.join(on_app, '/app'),
      pub: path.join(on_app, '/' + config.dist),
      dist: path.join(__dirname, '/' + config.dist),
      app: path.join(__dirname, '/.app'),
      tmp: path.join(__dirname, '/.tmp'),
      grn: path.join(__dirname, '/.grunt')
    },
    rootPath: process.cwd()
  }

  // override appData with package.json config values
  var configs = pkg.config
  appData = _.defaultsDeep({}, configs, appData)

  grunt.log.writeln('Running toolchain for type: ' + appData.type.cyan)

  // verify if a specific json config for this app type exists
  if (fse.existsSync(path.join(customGrunt, appData.type + '.json'))) {
    var toolchainTypeConfig = grunt.file.readJSON(path.join(customGrunt, appData.type + '.json'))
    // override configs with specific type config
    appData = _.defaultsDeep({}, configs, toolchainTypeConfig, appData)
  }

  // execute register-grunt-tasks
  registerGruntTasks(grunt, {
    path: [
      path.join(__dirname, customTaskPath),
      path.join(__dirname, customTaskPath, appData.type),
      path.join(__dirname, projectTaskPath),
      path.join(__dirname, userTaskPath)
    ]
  })

  // load time-grunt for running time analysis
  timeGrunt(grunt)

  // execute grunt-config
  loadGruntConfig(grunt, {
    // auto grunt.initConfig
    // init: true, // defaults to true
    // path to task config.js files, defaults to grunt dir
    configPath: [
      path.join(__dirname, taskConfigPath),
      path.join(__dirname, taskConfigPath, appData.type),
      path.join(__dirname, projectConfigPath),
      path.join(__dirname, userConfigPath)
    ],
    // additional data
    data: appData
  })

  // create a proxy availabletasks task ( shorter and custom )
  grunt.registerTask('tasks', function (subTask) {
    if (!subTask) {
      grunt.task.run('availabletasks:user')
    } else {
      grunt.task.run('availabletasks:' + subTask)
    }
  })

  // bit of cleaness in the output
  grunt.verbose.writeln()
}
