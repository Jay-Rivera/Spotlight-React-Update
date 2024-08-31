import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Search({ fetchMovies, homeValue, setHomeValue }) {
  useEffect(() => {
    setHomeValue("");
  }, []);

  function updateHomeValue(event) {
    setHomeValue(event.target.value);
  }

  return (
    <div className="search__bar--section">
      <input
        onChange={updateHomeValue}
        value={homeValue}
        type="text"
        placeholder="Search for a Movie!"
        className="search__bar"
      />
      <Link to="/SearchResults">
        <button className="search__button" onClick={fetchMovies}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </Link>
    </div>
  );
}

export default Search;
