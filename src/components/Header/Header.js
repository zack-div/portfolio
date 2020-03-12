import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../Header/Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          {/* BrandLogo */}
          <div className="brandLogo">
            <h1>Ultra Profile.</h1>
          </div>
          {/* NavHeader */}
          <div className="navHeader">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="/">Work</a>
              </li>
              <li>
                <a href="/">Protfolio</a>
              </li>
              <li>
                <a href="/">Resume</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
