import React, { useEffect, useState } from "react";
import Search from "../Components/Search";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import CardImage from "../assets/Spotlight-img.webp";

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
          <div className="movie__cards">
            <div className="movie__card">
              <img src={CardImage} alt="" />
              <h1 className="movie__card--title">Title of movie</h1>
              <p className="movie__card--description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                quidem reiciendis ipsum suscipit! Alias, et delectus ex dolor ea
                cumque!
              </p>
            </div>
            <div className="movie__card">
              <img src={CardImage} alt="" />
              <h1 className="movie__card--title">Title of movie</h1>
              <p className="movie__card--description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                quidem reiciendis ipsum suscipit! Alias, et delectus ex dolor ea
                cumque!
              </p>
            </div>
            <div className="movie__card">
              <div className="movie__card--image">
                <img src={CardImage} alt="" />
              </div>
              <h1 className="movie__card--title">Title of movie</h1>
              <p className="movie__card--description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                quidem reiciendis ipsum suscipit! Alias, et delectus ex dolor ea
                cumque!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResults;
