import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/Spotlight-img.webp";

function SearchResults({ apiKey }) {
  let navigate = useNavigate();
  const location = useLocation();
  const { movieID } = location.state || {};
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  const previousPage = () => {
    navigate(-1);
  };

  async function getMovieData() {
    try {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieID}`
      );
      setMovie(data);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    } finally {
      setIsLoading(false); // Stop loading after data fetch
    }
  }

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div className="search__results">
      {isLoading ? (
        <div className="no__data--container">
          <h2>Loading...</h2>
        </div>
      ) : movie ? (
        <div className="search__result">
          <div className="search__page--img search__half">
            <img
              className="search__page--img-poster"
              src={movie.Poster !== "N/A" ? movie.Poster : Logo}
              alt={movie.Title}
            />
          </div>
          <div className="search__page--details search__half">
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
        <div className="no__data--container">
          <h2 className="no__data--message">No movie data available</h2>
        </div>
      )}
    </div>
  );
}

export default SearchResults;
