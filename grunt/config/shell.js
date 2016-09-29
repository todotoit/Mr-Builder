'use strict';

var path = require('path');

module.exports = function (grunt, options) {

  return {

    makeDir: {
        command: 'mkdir ' + path.join(options.folders.dev, 'test_aaa')
    }

  };

};
