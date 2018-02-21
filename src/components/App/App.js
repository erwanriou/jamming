import React, {
  Component
} from 'react';
import './App.css';


import SearchBar from '../searchbar/SearchBar.js';
import SearchResult from '../searchresult/SearchResult.js';
import PlayList from '../playlist/PlayList.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name: 'erwan',
                       artist: 'is',
                       album: 'testing'}],
      playlistName: 'New Playlist',
      playlistTracks: []
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  addTrack(track) {
    if (!this.state.playlistTracks.find(tracks => tracks.id === track.id)) {
      this.state.playlistTracks.push(track);
      this.setState({playlistTracks: this.state.playlistTracks});
    }
  }

  removeTrack(track) {
    this.state.playlistTracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks: this.state.playlistTracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    const TrackURIs = this.state.playlistTracks.map(track => track.uri)
  }


  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResult searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <PlayList onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
