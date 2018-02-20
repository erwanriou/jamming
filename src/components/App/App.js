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
      searchResults: [],
      playlistName: 'ErwanPlayList',
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    if (!this.state.playlistTracks.find(tracks => tracks.id === track.id)) {
      this.state.playlistTracks.push(this.track);
    }
    this.setState({playlistTracks: playlistTracks});
  }

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResult searchResults={this.state.searchResults}/>
            <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
