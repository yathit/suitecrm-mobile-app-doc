
// Player control
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    origin: location.origin,
    videoId: 'es3UCAXU19I',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  // event.target.playVideo();
}

function onPlayerStateChange(event) {

}

document.addEventListener('DOMContentLoaded', function() {
  $('.video-link').on('click', function(ev) {
    ev.preventDefault();
    var id = $(this).attr('data-id');
    player.loadVideoById(id);
  });
}, false);

