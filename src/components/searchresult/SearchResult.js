import React from 'react';
import './SearchResult.css';
import TrackList from '../tracklist/TrackList.js';


class SearchResult extends React.Component {

  render() {
    return (
      <div className="SearchResult">
        <div className="TrackListTitle">
          <h2>Results</h2>
        </div>
        <TrackList />
      </div>
    );
  }
}

export default SearchResult;
