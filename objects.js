var playlist = {
  'Foo Fighters': 'Everlong',
  Prince: 'Purple Rain'
}

function updatePlaylist(playlist,artistName,songTitle){
  Object.assign({},playlist,{artistName:['songTitle']})
}
