'use strict';

var path = require('path');

module.exports = function (grunt, options) {

 return {

    team:{
    	options: {
          data: options.people,
          ext: 'html'
        },
        files: {
          '/path/to/folder/dest': '/path/to/file_template.html'
        }
    }

  };

};
