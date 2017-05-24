;(function ($, StateMan, APP) {
    /*
    //force reload on access to fragment directly
     var frag = window.location.pathname

      if (window.location && window.location.hash.indexOf('#') >= 0) {
        window.location.href = frag
      }
    */

  $(document).ready(function () {
    APP.stateman = new StateMan()
    APP.stateman.state({

      'main': new MainState()

    }).on('notfound', function () {
      APP.stateman.go('main')
    }).start({html5: false})
  })
})(window.jQuery, window.StateMan, window.APP)
