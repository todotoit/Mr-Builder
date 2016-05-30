'use strict';

var path = require('path');

module.exports = function (grunt, options) {

  	return {
  		options: {
		    data: {name:'HEY'},
		    //paths: options.folders.app
		},
		render: {
			files: [
		       {
		          expand: true,
		          cwd: options.folders.app,
		          src: "*.html",
		          dest: options.folders.dist,
		          ext: ".html"
		       }
		    ]
		}
  	};
};
