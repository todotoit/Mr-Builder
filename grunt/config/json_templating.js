'use strict';

var path = require('path');

module.exports = function (grunt, options) {

  var filesobteam = {};
  var teampath = path.join(options.folders.dist, 'people');
  filesobteam[teampath] = 'app/people/person.html';

 return {

    team:{
    	options: {
          data: options.people,
          ext: 'html'
        },
        files: filesobteam
    }

  };

};
