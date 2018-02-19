import React from 'react';
import './Track.css'

class Track extends React.Component {

  render() {

    let trackName = "Sweet Disposition";
    let trackAlbum = "The Temper Trap";
    let trackArtist = "Bootleg";

    return (
      <div className="track">
        <div className="trackText">
          <h2>{trackName}</h2>
          <p>{trackAlbum} - {trackArtist}</p>
        </div>
        <i onClick={this.props.onClick} className="fas fa-plus"></i>
      </div>
    );
  }
}

export default Track;
