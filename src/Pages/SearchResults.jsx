import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/Spotlight-img.webp";

function SearchResults({ apiKey }) {
  let navigate = useNavigate();
  const location = useLocation();
  const { movieID } = location.state || {};
  const [movie, setMovie] = useState(null);

  const previousPage = () => {
    navigate(-1);
  };

  async function getMovieData() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieID}`
    );

    setMovie(data);
  }

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div className="search__results">
      {movie ? (
        <div className="search__result">
          <div className="search__page--img">
            <img
              className="search__page--img-poster"
              src={movie.Poster !== "N/A" ? movie.Poster : Logo}
              alt={movie.Title}
            />
          </div>
          <div className="search__page--details">
            <div className="search__page--title">
              <h1 className="movie__title">{movie.Title}</h1>
            </div>
            <div className="movie__details">
              <p className="movie__details--text">
                <strong>Year:</strong> {movie.Year}
              </p>
              <p className="movie__details--text">
                <strong>Genre:</strong> {movie.Genre}
              </p>
              <p className="movie__details--text">
                <strong>Plot:</strong> {movie.Plot}
              </p>
              <p className="movie__details--text">
                <strong>Rated:</strong> {movie.Rated}
              </p>
              <p className="movie__details--text">
                <strong>Awards:</strong> {movie.Awards}
              </p>
              <p className="movie__details--text">
                <strong>Released:</strong> {movie.Released}
              </p>
              <p className="movie__details--text">
                <strong>Director:</strong> {movie.Director}
              </p>
              <p className="movie__details--text">
                <strong>Actors:</strong> {movie.Actors}
              </p>
              <p className="movie__details--text">
                <strong>Box Office:</strong> {movie.BoxOffice}
              </p>
            </div>
            <div className="result__btn">
              <button className="navigation__button" onClick={previousPage}>
                back
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>No movie data available</p>
      )}
    </div>
  );
}

export default SearchResults;
