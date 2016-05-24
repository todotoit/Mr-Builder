'use strict';

module.exports = function (grunt, options) {

 return {

    test: {
        options: {
          selector:'data-svg'
        },
        files: [
          {
            expand:true,
            cwd: 'public/',
            src: ['*.html'],
            dest: 'public/'
          }
        ]
      }

  };

};
