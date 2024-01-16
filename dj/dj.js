function createSong(name, artist, favorite) {
  const song = {
    name: name,
    artist: artist,
    hasBeenPlayed: false,
  };

  if(favorite) {
    song.favorite = favorite;
  } else {
    song.favorite = false
  }

  return song;
};

function playSong(song) {
  song.hasBeenPlayed = true;

  return song;
}

function makePlaylist(name, songs) {
  var playlist = {
    name: name,
    songs: []
  };

  for(var i = 0; i < songs.length; i++) {
    playlist.songs.push(songs[i]);
  };

  return playlist;
};

function addSongToPlaylist(playlist, song) {
  playlist.songs.push(song);

  return playlist;
};

function playSongs(playlist, option) {
  if(option === "favorites only") {
    for(var i = 0; i < playlist.songs.length; i++) {
      if(playlist.songs[i].favorite === true) {
        playSong(playlist.songs[i]);
      }
    };
  } else {
    for(var i = 0; i < playlist.songs.length; i++) {
      playSong(playlist.songs[i]);
    };
  }

  return playlist
}


module.exports = {
  createSong,
  playSong,
  makePlaylist,
  addSongToPlaylist,
  playSongs
};
