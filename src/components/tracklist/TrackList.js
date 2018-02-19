import React from 'react';
import './TrackList.css';
import Track from '../track/Track.js';


class TrackList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { position: 0 }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ position: (this.state.position + 1) % 2 })
  }

  render() {
    return (
      <div className="TrackLists">
        <div className="TrackList1">
          <div className="TrackListTitle">
            <h2>Results</h2>
          </div>
          <div className="TrackListcontent">
            { this.state.position === 0 ? <Track onClick={this.onClick}/> : ''}
          </div>
        </div>
        <div className="TrackList2">
          <div className="TrackListTitle">
            <h2>NewPlaylist</h2>
          </div>
          <div className="TrackListcontent">
            { this.state.position === 1 ? <Track onClick={this.onClick}/> : ''}
          </div>
        </div>
      </div>
    );
  }
}

export default TrackList;
