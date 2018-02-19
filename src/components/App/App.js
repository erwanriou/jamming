import React, {Component} from 'react';
import './App.css';

import SearchBar from '../searchbar/SearchBar.js';
import SearchResult from '../searchresult/SearchResult.js';
import PlayList from '../playlist/PlayList.js';
import TrackList from '../tracklist/TrackList.js';
import Track from '../track/Track.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { position: 0 }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ position: (this.state.position === 1) % 2 })
  }

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResult />
            <PlayList />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
