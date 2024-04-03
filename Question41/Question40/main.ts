/*
Album: Write a function called make_album() that builds a Object describing a music album.
 The function should take in an artist name and an album title,
  and it should return a Object containing these two pieces of information. 
  Use the function to make three dictionaries representing different albums.
   Print each return value to show that Objects are storing the album information correctly. 
   Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
   If the calling line includes a value for the number of tracks, add that value to the album’s Object.
 Make at least one new function call that includes the number of tracks on an album. */

function make_album(artistName: string, albumTitle: string, tracks?: number) {
  let albuminfo: any = {artistName,albumTitle};
  if (tracks) {
    albuminfo['tracks'] = tracks;
  }
  return albuminfo;
}

let dictionary1 = make_album("Junaid Jamshed", "Madine ki ziyarat");
console.log(dictionary1);

let dictionary2 = make_album("Muhammed Ali", "bausat e Nabwi");
console.log(dictionary2);

let dictionary3 = make_album("Muhammad Sami", "Nematon ka nuzool ", 87);
console.log(dictionary3);

