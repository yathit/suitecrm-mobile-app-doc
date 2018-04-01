// The client ID is obtained from the {{ Google Cloud Console }}
// at {{ https://cloud.google.com/console }}.
// If you run this code from a server other than http://localhost,
// you need to register your own client ID.
var OAUTH2_CLIENT_ID = '164649788853-j2b4netcuag53gmellg9n9ha79aannal.apps.googleusercontent.com';
var OAUTH2_SCOPES = [
  'https://www.googleapis.com/auth/youtube'
];

// Upon loading, the Google APIs JS client automatically invokes this callback.
googleApiClientReady = function() {
  gapi.auth.init(function() {
    window.setTimeout(checkAuth, 1);
  });
};

// Attempt the immediate OAuth 2.0 client flow as soon as the page loads.
// If the currently logged-in Google Account has previously authorized
// the client specified as the OAUTH2_CLIENT_ID, then the authorization
// succeeds with no user intervention. Otherwise, it fails and the
// user interface that prompts for authorization needs to display.
function checkAuth() {
  gapi.auth.authorize({
    client_id: OAUTH2_CLIENT_ID,
    scope: OAUTH2_SCOPES,
    immediate: true
  }, handleAuthResult);
}

// Handle the result of a gapi.auth.authorize() call.
function handleAuthResult(authResult) {
  if (authResult && !authResult.error) {
    // Authorization was successful. Hide authorization prompts and show
    // content that should be visible after authorization succeeds.
    $('.pre-auth').hide();
    $('.post-auth').show();
    loadAPIClientInterfaces();
  } else {
    // Make the #login-link clickable. Attempt a non-immediate OAuth 2.0
    // client flow. The current function is called when that flow completes.
    $('#login-link').click(function() {
      gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        scope: OAUTH2_SCOPES,
        immediate: false
      }, handleAuthResult);
    });
  }
}

// Load the client interfaces for the YouTube Analytics and Data APIs, which
// are required to use the Google APIs JS client. More info is available at
// https://developers.google.com/api-client-library/javascript/dev/dev_jscript#loading-the-client-library-and-the-api
function loadAPIClientInterfaces() {
  gapi.client.load('youtube', 'v3', function() {
    handleAPILoaded();
  });
}


function handleAPILoaded() {
  listVideo();
}

function renderItems(items) {
  var data = items.map(function(x) {
    return {
      id: x.id,
      title: x.snippet.title,
      duration: x.contentDetails.duration
          .replace('PT', '').replace('M', 'min:').replace('S', 'sec')
  }
  });
  window.data = data;
  console.log(items);
  console.log('copy(JSON.stringify(data, null, 2))');
}

function listVideo() {
  gapi.client.youtube.playlistItems.list({
    'maxResults': '20',
    'part': 'contentDetails',
    'playlistId': 'PL0ZVs2MTcLP82s0qTsQ3RTZXad_dZCSbU'
  }).then(function (x) {
    var ids = x.result.items.map(function(x) {return x.contentDetails.videoId;}).join(',');
    gapi.client.youtube.videos.list({part: 'snippet,contentDetails', id: ids}).then(function(x){
      renderItems(x.result.items)
    });
  })
}