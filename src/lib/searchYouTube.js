var searchYouTube = (options, callback) => {
  var max = options.max || 5;
  var apiKey = options.key || window.YOUTUBE_API_KEY;
  var query = options.query || '';

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      q: query,
      key: apiKey,
      maxResults: max,
      type: 'video'
    },
    
    type: 'GET',
    success: function(data) {
      callback(data.items);
    },
    error: function(e) {
      console.log('error', e);
    }
  });
};

window.searchYouTube = searchYouTube;
