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
      tasks: [  ],
      // set beautiful descriptions
      descriptions: {
        'build:simple': 'Build the app with type "simple"',
        'build:angular': 'Build the app with type "angular"',
        'build:static': 'Build the app with type "static"',
        'dev:simple': 'Start development mode with type "simple"',
        'dev:angular': 'Start development mode with type "angular"',
        'dev:static': 'Start development mode with type "static"',

      },
    },
    tasks: {}

  };

};
