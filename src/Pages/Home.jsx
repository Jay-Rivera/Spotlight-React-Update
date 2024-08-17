import React from "react";
import Search from "../Components/Search";
import Home__Img from "../assets/Home__Img.png";

function Home() {
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
      <Search />
      <div className="body__section">
        <img className="body__section--img" src={Home__Img} />
      </div>
    </div>
  );
}

export default Home;
