import React from 'react';
import './SearchButton.css';

const SearchButton = (props) => (
    <button
      onClick={props.clicked}
      className="btn btn-primary" id="nytSearchButton">
      Search
    </button>
);

export default SearchButton;