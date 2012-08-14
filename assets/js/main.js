var app = {},
    device = {
      detect: function(key) {
        if(this['_'+key] === undefined) {
          this['_'+key] = navigator.userAgent.match(new RegExp(key, 'i'));
        }
        return this['_'+key];
      },
      iDevice: function() {
        return this.detect('iPhone') || this.detect('iPod');
      },
      android: function() {
        return this.detect('Android');
      },
      webOS: function() {
        return this.detect('webOS');
      },
      mobile: function() {
        return this.iDevice() || this.android() || this.webOS();
      },
      windows: function() {
        return navigator.platform.indexOf('Win') > -1;
      },
      firefox: function() {
        return this.detect('Firefox');
      }
    };

function getQuerystring(key, default_) {
  if (default_==null) default_=""; 
  key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
  var qs = regex.exec(window.location.href);
  if(qs == null)
    return default_;
  else
    return qs[1];
}

/**
 * Initialize
 */
(function() {
  $(function() {
    console.log('hello');
  });
}());

/*
 * No JS/JS Script
 */
(function(H) {
  H.className=H.className.replace(/\bno-js\b/,"js");
}(document.documentElement));
