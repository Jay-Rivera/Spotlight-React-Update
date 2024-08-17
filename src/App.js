import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SearchResults from "./Pages/SearchResults";
import Nav from "./Components/Nav";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/SearchResults" element={<SearchResults />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
