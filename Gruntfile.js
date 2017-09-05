'use strict'

var _ = require('lodash')
var fse = require('fs-extra')
var path = require('path')

module.exports = function (grunt) {
  grunt.log.writeln('Mr. Builder here at your service:')

  var on_app = grunt.option('app') // i.e. grunt build --app=app_name

  if (on_app === '.') on_app = __dirname

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
  var baseGruntPath = path.join(__dirname, 'grunt') // 'grunt/'
  var builderTaskPath = path.join(baseGruntPath, 'tasks')
  var builderConfigPath = path.join(baseGruntPath, 'config')

  var baseProjectPath = path.join(on_app)
  var projectTaskPath = path.join(baseProjectPath, 'grunt', 'tasks')
  var projectConfigPath = path.join(baseProjectPath, 'grunt', 'config')

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

  var appData = {
    // package: grunt.file.readJSON('package.json') // automatically added by load-grunt-config
    // choose type of application; enable and disable specific tasks

    version: localPkg.version,
    pkg: localPkg,
    env: whichEnv,
    config: config,

    folders: {
      dev: path.join(on_app, '/app'),
      pub: path.join(on_app, '/' + config.dist),
      dist: path.join(__dirname, '/.' + config.dist),
      app: path.join(__dirname, '/.app'),
      tmp: path.join(__dirname, '/.tmp'),
      grn: path.join(__dirname, '/.grunt')
    },
    rootPath: process.cwd()
  }

  // override appData with package.json config values
  var configs = pkg.config
  appData = _.defaultsDeep({}, configs, appData)

  // execute register-grunt-tasks
  registerGruntTasks(grunt, {
    path: [
      builderTaskPath, projectTaskPath
    ]
  })

  // load time-grunt for running time analysis
  timeGrunt(grunt)

  // execute grunt-config
  loadGruntConfig(grunt, {
    configPath: [
      builderConfigPath
    ],
    overridePath: [
      projectConfigPath
    ],
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
}
