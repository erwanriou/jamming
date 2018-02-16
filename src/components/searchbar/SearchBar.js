import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Write your songe here"></input>
        <button type="" name="">Search</button>
      </div>
    );
  }
}

export default SearchBar;
