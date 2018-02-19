import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from '../src/components/searchbar/SearchBar.js';
import SearchResult from '../src/components/searchresult/SearchResult.js';
import PlayList from '../src/components/playlist/PlayList.js';
import TrackList from '../src/components/tracklist/TrackList.js';
import Track from '../src/components/track/Track.js';

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
      <div className="App">
        <header>
          <div className="header container">
            <div className="title">
              <h1>Ja<strong>mmm</strong>ing</h1>
            </div>
            <SearchBar />
          </div>
        </header>
        <div className="content container">
          <SearchResult />
          <PlayList />
        </div>
      </div>
    );
  }
}

export default App;
