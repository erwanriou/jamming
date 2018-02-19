import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from '../src/components/searchbar/SearchBar.js';
import TrackList from '../src/components/tracklist/TrackList.js';

class App extends Component {


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
          <TrackList />
        </div>
      </div>
    );
  }
}

export default App;
