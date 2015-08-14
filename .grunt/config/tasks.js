'use strict';

var path = require('path');

module.exports = function (grunt, options) {

  // this is the grunt configuration object
  return {

    options: {
      // show only user defined tasks
      showTasks: ['user'],
      filter: 'exclude',
      // exclude this tasks
      tasks: [ 'mdCompile' ],
      // set beautiful descriptions
      descriptions: {
        'build': 'Detect which build:* task should be run according to appData.type',
        'build:standalone': 'Build the app with type "standalone"',
        'build:angular': 'Build the app with type "angular"',
        'build:static': 'Build the app with type "static"',
        'dev': 'Detect which dev:* task should be run according to appData.type',
        'dev:standalone': 'Start development mode with type "standalone"',
        'dev:angular': 'Start development mode with type "angular"',
        'dev:static': 'Start development mode with type "static"',

      },
    },
    tasks: {}

  };

};
