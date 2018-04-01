
var _paq = _paq || [];
_paq.push(['setUserId', localStorage.getItem('uid') || '']);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="https://analytic.yathit.com/";
  _paq.push(['setTrackerUrl', u+'piwik.php']);
  if (location.host === 'www.yathit.com') {
    _paq.push(['setSiteId', '1']);
    _paq.push(['setDomains', '*.yathit.com']);
  } else {
    _paq.push(['setSiteId', '2']);
  }

  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();

function sendAnalytic() {
  _paq.push(Array.prototype.slice.call(arguments));
}
