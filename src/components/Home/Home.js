import React, { Component } from "react";
import "../Home/Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home_section">
          <div className="darker">
            <h1>Home Title</h1>
            <h3>Creative Director</h3>
            <p>
              Iam a professional <span> UX Designer </span> and Front-End
              Developer creating modern and resposive design to Web and
              Mobile.Let us work togthere .Thank you .
            </p>
            <button className="btn-begin">Let's Begin</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
