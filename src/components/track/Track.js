import React from 'react';
import './Track.css'

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isRemoval: false}
  }


  render() {

    let trackName = "Sweet Disposition";
    let trackAlbum = "The Temper Trap";
    let trackArtist = "Bootleg";

    renderAction() {
      if (isRemoval)
    }

    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{trackName}</h3>
          <p>{trackArtist} | {trackAlbum}</p>
        </div>
        <a className="Track-action">{this.renderAction}</a>
      </div>
    );
  }
}

export default Track;
