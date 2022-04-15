import React, { useState } from "react";

const SearchButton = ({ onSubmitHandler }) => {
  return (
    <button className="btn btn btn-success" onClick={onSubmitHandler}>
      Search
    </button>
  );
};

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    search(searchInput);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Baby Names</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmit}>
            <div className="search-row">
              <input
                onChange={handleSearchInput}
                value={searchInput}
                type="text"
                id="babyName"
                className="form-control"
                placeholder="type name"
              />
              <SearchButton onSubmitHandler={handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
