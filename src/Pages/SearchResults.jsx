import React, { useEffect, useState } from "react";
import Search from "../Components/Search";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

function SearchResults() {
  // let navigate = useNavigate()
  const apiKey = `67129a98`;

  const [Movies, setMovies] = useState([]);

  return (
    <>
      <div>
        <div className="search__top--section">
          <div className="search__title--section">
            <h1 className="search__title">Find Your Favorite Movies</h1>
          </div>
          <Search />
        </div>
        <div className="search__results--section">
          <div className="search__results--top">
            <h2 className="search__results--explanation">
              Search results for 'movie title' :
            </h2>
          </div>
          <div className="movie__card"></div>
        </div>
      </div>
    </>
  );
}

export default SearchResults;
