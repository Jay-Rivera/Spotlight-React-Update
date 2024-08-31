import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Home__Img from "../assets/Home__Img.png";

function SearchResults({ movies, fetchMovies, searchValue, loading }) {
  return (
    <div>
      <div className="search__top--section">
        <div className="search__title--section">
          <h1 className="search__title">Find Your Favorite Movies</h1>
        </div>
        <div className="search__bar--section">
          <input
            type="text"
            placeholder="Search for a Movie!"
            className="search__bar"
          />
          <Link to="/SearchResults">
            <button className="search__button">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </Link>
        </div>
      </div>
      <div className="search__results--section">
        <div className="search__results--top">
          <h2 className="search__results--explanation">
            Search results for {searchValue} :
          </h2>
        </div>
        <div className="movie__cards">
          {movies.map((movie) => (
            <div className="movie__card">
              <img
                className="movie__card--image"
                src={movie.Poster}
                key={movie.imdbID}
                alt=""
              />
              <h1 className="movie__card--title">{movie.Title}</h1>
              <p className="movie__card--description">{movie.Year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
