'use strict';

module.exports = function (grunt, options) {

 return {

    multi: {
        options: {
          selector:'data-svg',
          removeAttr:true
        },
        files: [
          {
            expand:true,
            cwd: options.folders.dist,
            src: ['*.html', '**/*.html'],
            dest: options.folders.dist
          }
        ]
      }

  };

};
