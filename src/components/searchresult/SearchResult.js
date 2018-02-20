import React from 'react';
import './SearchResult.css';
import TrackList from '../tracklist/TrackList.js';


class SearchResult extends React.Component {

  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd}/>
      </div>
    );
  }
}

export default SearchResult;
