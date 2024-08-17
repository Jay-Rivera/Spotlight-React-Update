import React from "react";
import Search from "../Components/Search";

function SearchResults() {
  return (
    <>
      <div>
        <div className="search__title--section">
          <h1 className="search__title">Find Your Favorite Movies</h1>
        </div>
        <Search />
      </div>
    </>
  );
}

export default SearchResults;
