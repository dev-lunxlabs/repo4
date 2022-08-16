import React from "react";
import "../styles/Navbar.css";
import logo from "./images/VidPlay.svg";
import smallScreen from "./images/smallScreen.png";
import largeScreen from "./images/largeScreen.png";
const Navbar = () => {
  return (
    <>
      <nav className="navigation">
        <div className="nav-logo">
          <img src={logo} alt=""></img>
        </div>

        <div className="navigation-menu">
          <ul>
            <li>
              <a href="#">App Features</a>
            </li>
            <li>
              <a href="#">Builder Features</a>
            </li>
            <li>
              <a href="#">Customer Stories</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="flex">
          <button className="login">Login</button>
          <button className="intouch">Get in touch</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
