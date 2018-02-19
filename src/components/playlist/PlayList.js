import React from 'react';
import './PlayList.css';
import TrackList from '../tracklist/TrackList.js';


class PlayList extends React.Component {

  render() {
    return (
      <div className="PlayList">
        <div className="PlayListTitle">
          <h2>New PlayList</h2>
        </div>
        <TrackList />
      </div>
    );
  }
}

export default PlayList;
