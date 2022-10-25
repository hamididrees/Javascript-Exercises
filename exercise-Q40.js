//Album: Write a function called make_album() that builds a Object describing a music album.
const make_album = (artist, title) => {
  return (album_dictionary = {
    artist: artist,
    title: title,
  });
};
console.log(make_album("atif Aslam", "Tajdar e haram"));
console.log(make_album("Ali Setthi", "Pasoori"));
console.log(make_album("Sahir Ali Bagga", "Pakistan Zindabad"));
