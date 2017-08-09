'use strict'

var path = require('path')

module.exports = function (grunt, options) {
  var version = options.version
  var config = options.config

    // this is the grunt configuration object
  return {

    html: [ path.join(options.folders.app, 'index.html'), path.join(options.folders.app, '**/*.html'), '!' + path.join(options.folders.app, 'node_modules/**/*.html') ],
    options: {
      blockReplacements: {
        js: function (block) {
          if (config.async_bundle) {
            return `<script type="text/javascript">
                    function _l(a,b){var c=new XMLHttpRequest,d=document;c.open("GET",a,!0),c.onload=function(){var a=d.createElement("script");a.type="text/javascript",a.textContent=c.responseText,d.body.appendChild(a),b&&b()},c.send()}
                    _l('${block.dest}?v=${version}');
                    </script>`
          } else {
            return `<script type="text/javascript" src="${block.dest}?v=${version}"></script>`
          }
        },
        css: function (block) {
          var dest = block.dest.split('/')
          dest = (dest.length > 1) ? dest[dest.length - 1] : dest[0]
          return '<link href="' + dest + '?__inline=true&v=' + version + '" rel="stylesheet" />'
        }
      }
    }

  }
}
