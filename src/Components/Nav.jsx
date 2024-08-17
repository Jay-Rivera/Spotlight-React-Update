import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Spotlight-img.webp";

function Nav() {
  return (
    <div className="nav__bar">
      <div className="logo__section">
        <img className="logo__img" src={Logo} alt="" />
        <div className="nav__logo">SpotLight</div>
      </div>
      <div className="nav__links">
        <Link className="nav__link-component" to={"/"}>
          <li className="nav__link">Home</li>
        </Link>
        <Link className="nav__link-component" to={"/SearchResults"}>
          <li className="nav__link">Find A Movie</li>
        </Link>
        <Link className="nav__link-component" to={"/"}>
          <li className="nav__link--contact">Contact</li>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
