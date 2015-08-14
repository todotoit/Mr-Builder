'use strict';

module.exports = function (grunt) {

  var type = grunt.config('type');

  switch (type) {
    case 'simple':
      grunt.log.writeln('Running "dev:simple"');
      grunt.task.run('dev:simple');
      break;
    case 'angular':
      grunt.log.writeln('Running "dev:angular"');
      grunt.task.run('dev:angular');
      break;
    case 'static':
      grunt.log.writeln('Running "dev:static"');
      grunt.task.run('dev:static');
      break;
    default:
      grunt.fail.fatal('Invalid appData.type');
      break;
  }

};
