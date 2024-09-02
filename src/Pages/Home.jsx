import React, { useEffect, useState } from "react";
import Home__Img from "../assets/Home__Img.png";
import Logo from "../assets/Spotlight-img.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchResults from "./SearchResults";

function Home({
  setSearchValue,
  fetchMovies,
  nextPage,
  previousPage,
  searchValue,
  movies,
  count,
  apiKey,
}) {
  const [homeValue, setHomeValue] = useState("");
  const [movie, setMovie] = useState("");
  const [movieID, setMovieID] = useState("");

  const enterKey = (event) => {
    if (event.key === "Enter") {
      updateSearchValue();
    }
  };

  useEffect(() => {
    setSearchValue("");
  }, []);

  function updateSearchValue() {
    setSearchValue(homeValue);
    fetchMovies();
  }

  function updateHomeValue(event) {
    setHomeValue(event.target.value);
  }

  async function fetchMovie(movieID) {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieID}`
    );
    setMovie(data);
    setMovieID(movieID);
  }

  return (
    <div>
      <div className="home__title--section">
        <div className="home__title">
          Seattle's most awarded <br />
          Movie Information Platform
        </div>
        <div className="home__sub-title">
          Find Your Movie with <span className="lightblue">SpotLight</span>
        </div>
      </div>
      <div className="search__bar--section">
        <input
          onChange={updateHomeValue}
          onKeyDown={enterKey}
          value={homeValue}
          type="text"
          placeholder="Search for a Movie!"
          className="search__bar"
        />
        <button
          className="search__button"
          onClick={updateSearchValue}
          onKeyPress={enterKey}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      {movies && movies.length === 0 ? (
        <div className="body__section">
          <img className="body__section--img" src={Home__Img} />
        </div>
      ) : (
        <div className="search__results--section">
          <div className="search__results--top">
            <h2 className="search__results--explanation">
              Search results for {searchValue} :
            </h2>
          </div>
          <div className="movie__cards">
            {movies.map((movie) => (
              <Link
                to={"/SearchResults"}
                key={movie.imdbID}
                state={{ movieID: movie.imdbID }}
              >
                <div
                  className="movie__card"
                  onClick={() => fetchMovie(movie.imdbID)}
                >
                  <img
                    className="movie__card--image"
                    src={movie.Poster !== "N/A" ? movie.Poster : Logo}
                    key={movie.imdbID}
                    alt=""
                  />
                  <div className="card__details">
                    <h1 className="movie__card--title">{movie.Title}</h1>
                    <p className="movie__card--description">{movie.Year}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {count >= 2 ? (
            <div className="navigation__buttons">
              <button className="navigation__button" onClick={previousPage}>
                Previous Page
              </button>
              <button className="navigation__button" onClick={nextPage}>
                Next Page
              </button>
            </div>
          ) : (
            <div className="navigation__buttons">
              <button className="navigation__button" onClick={nextPage}>
                Next Page
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
