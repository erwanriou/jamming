import React from 'react';
import './Track.css'

class Track extends React.Component {


  renderAction() {
    if (this.props.isRemoval === false) {
      return <a className="Track-action">-</a>
    } else {
      return <a className="Track-action">+</a>
    }
  }

  render() {

    let trackName = "Sweet Disposition";
    let trackAlbum = "The Temper Trap";
    let trackArtist = "Bootleg";



    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{trackName}</h3>
          <p>{trackArtist} | {trackAlbum}</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
