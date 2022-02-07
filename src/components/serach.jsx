import React from "react";

const Search = ({ handleSearch, keyword }) => {
  return (
    <div className=" form-group">
      <label className="text-primary h5">Search</label>
      <input
        placeholder="filter by name..."
        className="form-control text-primary"
        type="search"
        value={keyword}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
