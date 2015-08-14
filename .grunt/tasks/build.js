'use strict';

module.exports = function (grunt) {

  var type = grunt.config('type');

  switch (type) {
    case 'simple':
      grunt.log.writeln('Running "build:simple"');
      grunt.task.run('build:simple');
      break;
    case 'angular':
      grunt.log.writeln('Running "build:angular"');
      grunt.task.run('build:angular');
      break;
    case 'static':
      grunt.log.writeln('Running "build:static"');
      grunt.task.run('build:static');
      break;
    default:
      grunt.fail.fatal('Invalid appData.type');
      break;
  }

};
