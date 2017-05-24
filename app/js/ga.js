;(function ($, APP, ga) {
  // track any stage change in gAnalytics
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/single-page-applications
  // according to this reference we need to set a page first then we can send the pageview
  // events tracking don't consider pageview

  $(document).ready(function () {
    var loc = window.location.pathname

    if (APP.stateman.current) {
      if (!window.ga) return

      var v = loc + APP.stateman.current.name
      ga('set', 'page', v)
      ga('send', 'pageview', v)
    }

    APP.stateman.on('begin', function (e) {
      if (!window.ga) return
      var v = loc + e.path
      ga('set', 'page', v)
      ga('send', 'pageview', v)
    })

    $('[track]').on('click', function () {
      if (!window.ga) return
      var t = $(this).attr('track')
      var parts = t.split('__')
      ga('send', 'event', loc + parts[0], parts[1])
    })
  })
})(window.jQuery, window.APP, window.ga)
