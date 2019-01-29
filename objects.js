var playlist= { "Green Day": "American Idiot"  };

function updatePlaylist(playlist, artistName,songTitle){
  playlist["Phil Ochs"]= "My Bloody Valentine"
  return updatePlaylist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist
}