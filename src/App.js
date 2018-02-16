import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from '../src/components/searchbar/SearchBar.js';
import Results from '../src/components/results/Results.js';
import NewPlaylist from '../src/components/newplaylist/NewPlaylist.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="title">
            <h1>Ja<strong>mmm</strong>ing</h1>
          </div>
          <SearchBar />
        </header>
        <div className="content">
          <Results />
          <NewPlaylist />
        </div>
      </div>
    );
  }
}

export default App;
