console.log('Script.js linked!');

$(function(){


  const albumDiv = $('<section id="album-list" class="album">');
  albumDiv.css('background', 'aqua');
  $('h1').appendTo(albumDiv);
  albumDiv.appendTo('body');

  const imgDiv = $('<section id="image">');
  imgDiv.css('background-color', 'rebeccapurple');
  const heading2 = $('<h1>');
  heading2.appendTo(imgDiv);
  heading2.text("Ke$ha's Kid Friendly Jams");
  imgDiv.appendTo('body');

  const recentTracksDiv = $('<section id="tracks">');
  recentTracksDiv.css('background-color', 'yellow');
  const heading3 = $('<h1>');
  heading3.appendTo(recentTracksDiv);
  heading3.text("Ke$ha's Latest Hits");
  recentTracksDiv.appendTo('body');


  const makeCall = () => {
    $.ajax({
        method: 'GET',
        url: 'https://itunes.apple.com/search?term=ke$ha&entity=album',
        dataType: 'JSONP',
        success: function(data) {
          getData(data);
        }
    });
  }

  makeCall();

  const getData = (data) => {
    // console.log(data);
    // let recentTracks = [];
    for (let i = 0; i < data.results.length; i++) {
        console.log(data.results[i]);
        const album = $('<div class="album">');
        album.text(data.results[i].collectionName).appendTo('#album-list');

        if (data.results[i].collectionExplicitness === "notExplicit") {
          let image = $('<img class="img">');
          image.attr('src', data.results[i].artworkUrl60);
          image.appendTo('#image');
        }

        let releaseInfo = data.results[i].releaseDate;
        let date = releaseInfo.split('-');
        // console.log(date);
        // recentTracks.push(date[0]);
        // const highest = Math.max.apply($(this),recentTracks);
        // console.log(highest);
        if (date[0] == 2016 || date[0] == 2015 || date[0] == 2014) {
          console.log(releaseInfo);
          const recentTracks = $('<div class="tracks">');
          recentTracks.text(data.results[i].collectionName).appendTo('#tracks');

        }
    }
  }

});
