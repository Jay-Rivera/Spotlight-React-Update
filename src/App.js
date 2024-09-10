import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SearchResults from "./Pages/SearchResults";
import Nav from "./Components/Nav";
import Contact from "./Pages/Contact";
import "./App.css";

function App() {
  const apiKey = `67129a98`;
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);

  const resetSearch = () => {
    setMovies([]);
    setSearchValue("");
    setLoading(false);
    setCount(1);
  };

  const fetchMovies = useCallback(
    async (searchValue) => {
      if (!searchValue) return;
      setLoading(true);
      try {
        const { data } = await axios.get(
          `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchValue}&page=${count}`
        );

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    },
    [count, apiKey]
  );

  const nextPage = () => {
    const newCount = count + 1;
    setCount(newCount);
    fetchMovies(searchValue);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousPage = () => {
    const newCount = count - 1;
    setCount(newCount);
    fetchMovies(searchValue);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetchMovies(searchValue);
  }, [searchValue, count, fetchMovies]);

  return (
    <Router>
      <div className="app">
        <Nav resetSearch={resetSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                fetchMovies={fetchMovies}
                movies={movies}
                loading={loading}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                nextPage={nextPage}
                previousPage={previousPage}
                count={count}
                apiKey={apiKey}
              />
            }
          />
          <Route
            path="/SearchResults"
            element={
              <SearchResults
                nextPage={nextPage}
                previousPage={previousPage}
                count={count}
                apiKey={apiKey}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
