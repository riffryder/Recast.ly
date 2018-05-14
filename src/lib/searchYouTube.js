var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      videoEmbeddable: true,
      type: 'video'
    },
    success: function(response) {
      console.log('Response from youtube: ', response);
      callback(response.items);
    }, 
    error: function(err) {
      console.log('error', err);
    }
  });
};

window.searchYouTube = searchYouTube;