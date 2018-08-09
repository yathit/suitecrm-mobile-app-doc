window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-114586412-1');


function sendAnalytic(action, category, label, value) {
  gtag('event', action, {
    'event_category': category,
    'event_label': label,
    'value': value
  });
}
