function createCollection(name, description) {
  var collection = {
    name: name,
    description: description,
    tracks: []
  };

  return collection;
};

function createTrack(title = 'unknown', artist = 'unknown', duration = 0) {
  return track = {
    title,
    artist,
    duration
  };
};

function reviewTrack(track) {
    if (track.artist === 'Red Hot Chili Peppers') {
      return `The song ${track.title} rules!`
    } else {
      return `I wish this was a Red Hot Chili Peppers song.`
    };

  // using a ternary operator instead
  // return track.artist === 'Red Hot Chili Peppers'
  //   ? `The song ${track.title} rules!`
  //   : `I wish this was a Red Hot Chili Peppers song.`;
};

function addTrack(collection, track) {
  collection.tracks.push(track);
  return collection;
};

function getTotalDuration(collection) {
  count = 0

  for (var i = 0; i < collection.tracks.length; i++) {
    count += collection.tracks[i].duration;
  }

  return count;
};

function findTracksByArtist(collection, query) {
  results = []

  for (var i = 0; i < collection.tracks.length; i++) {
    if (collection.tracks[i].artist === query) {
      results.push(collection.tracks[i]);
    };
  };

  return results;
};

module.exports = {
  createCollection,
  createTrack,
  reviewTrack,
  addTrack,
  getTotalDuration,
  findTracksByArtist
}