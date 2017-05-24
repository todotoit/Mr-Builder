;(function ($) {
  'use strict'

  $(document).ready(function () {
    var userAgree = window.docCookies.getItem('doNotProfile')

    if (!userAgree) {
      $('#cookie').css('display', 'block')

    // window.addEventListener('scroll', setCookie);
      $('[js_ok_cookie]').on('click', function () {
        setCookie()
        return false
      })
    }

    function setCookie () {
      var expirationDate = new Date(new Date().setYear(new Date().getFullYear() + 1))

      window.docCookies.setItem('doNotProfile', 1, expirationDate, '/')
            // window.removeEventListener('scroll', setCookie);
      $('[js_ok_cookie]').off('click')

      $('#cookie').transition({opacity: 0,
        complete: function () {
          $('#cookie').remove()
        }})
    }
  })
})(window.jQuery)
