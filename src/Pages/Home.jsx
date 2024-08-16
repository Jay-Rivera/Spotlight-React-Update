import React from "react";
import Search from "../Components/Search";

function Home() {
  return (
    <div>
      <div className="nav__bar">
        <div className="nav__logo">SpotLight</div>
        <div className="nav__links">
          <li className="nav__link">Home</li>
          <li className="nav__link">Find a Movie</li>
          <li className="nav__link--contact">Contact</li>
        </div>
      </div>
      <div className="home__title--section">
        <div className="home__title">
          Seattle's most awarded <br />
          Movie Information Platform
        </div>
        <div className="home__sub-title">
          Find Your Movie with <span className="lightblue">SpotLight</span>
        </div>
      </div>
      <Search />
    </div>
  );
}

export default Home;
