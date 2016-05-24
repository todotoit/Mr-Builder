'use strict';

module.exports = function (grunt, options) {

 return {

    mytask:{
      	options: {
          selector:'data-svg',
          removeAttr:true
        },
        files: [
          {
            src:  'example/*.html',
            dest: 'public/'
          }
        ]
    }

  };

};
