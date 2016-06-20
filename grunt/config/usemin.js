'use strict';

var path = require('path');

module.exports = function (grunt, options) {

  // this is the grunt configuration object
  return {
  	
    html: [ path.join(options.folders.app, 'index.html'), path.join(options.folders.app, '**/*.html') ],
    options: {
	    blockReplacements: {
	      js: function (block) {
	      		//return '<script type="text/javascript">(function(d, s, id){var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)){ return; }js = d.createElement(s); js.id = id;js.src = "'+(block.dest + '?v='+Math.random())+'";fjs.parentNode.insertBefore(js, fjs);}(document, "script", "todo_'+block.dest+'"));</script>';
	      		//return '<script type="text/javascript" src="'+(block.dest + '?v='+Math.random())+'"></script>';
	      		return ''
	      },
	      css: function(block){
	      		return '<link href="'+block.dest+'?__inline=true" rel="stylesheet" />';
	      }
	    }
	  }

  };

};


