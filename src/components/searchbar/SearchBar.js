import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <form onSubmit="" className="SearchBar">
        <input placeholder="Write your songe here"></input>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;