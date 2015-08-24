'use strict';

// var path = require('path');

module.exports = function (grunt, options) {

  // this is the grunt configuration object
  return {

    options: {},
    // show all available tasks
    all: {},
    // show only user defined tasks
    user: {
      options: {
        showTasks: ['user'],
        filter: 'exclude',
        // exclude this tasks
        tasks: [ 'mdCompile' ],
        // set beautiful descriptions
        descriptions: {
          'build': 'Detect which build:* task should be run according to appData.type',
          'dev':   'Detect which dev:* task should be run according to appData.type',
          'tasks': 'Show avaialble tasks. To show every possible available task run tasks:all'
        },
      }
    }

  };

};
