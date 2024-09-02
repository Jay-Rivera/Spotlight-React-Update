import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SearchResults from "./Pages/SearchResults";
import Nav from "./Components/Nav";
import React, { useEffect, useState } from "react";
import axios from "axios";

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

  async function fetchMovies(searchValue) {
    if (!searchValue) return; // Prevent unnecessary API call
    setLoading(true);
    try {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchValue}&page=${count}`
      );

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]); // Clear movies if no results found
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }

  function nextPage() {
    const newCount = count + 1;
    setCount(newCount);
    fetchMovies(searchValue, count);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function previousPage() {
    const newCount = count - 1;
    setCount(newCount);
    fetchMovies(searchValue, count);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    fetchMovies(searchValue, count);
  }, [searchValue, count]);

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
          ></Route>
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
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
