import React from "react";

const Search = (props) => {
  return (
    <div className="search">
      <h4 className="text-left">Search Baby Names</h4>
      <input
        onChange={props.handleSearchInput}
        value={props.searchInput}
        type="text"
        id="babyName"
        placeholder="type name"
      />
    </div>
  );
};

export default Search;
