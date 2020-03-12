import React, { Component } from "react";
import axios from "axios";

import "../Portfolio/Portfolio.css";

class Portfolio extends Component {
  state = {
    works: []
  };
  componentDidMount() {
    axios.get("js/data.json").then(res =>
      this.setState({
        works: res.data.portfolio
      })
    );
  }

  render() {
    const works = this.state.works;
    const work = works.map(item => {
      return (
        <div className="show-img-protfolio" key={item.id}>
          <img src={item.images} alt="img" />
        </div>
      );
    });
    return (
      <div className="portfolio">
        <div className="title-portfolio">
          <h1>
            My <span>Portfolio</span>
          </h1>
        </div>
        <div className="nav-portfolio">
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">HTML</a>
            </li>
            <li>
              <a href="/">Photoshop</a>
            </li>
            <li>
              <a href="/">Wordpress</a>
            </li>
            <li>
              <a href="/">Mobile</a>
            </li>
          </ul>
        </div>

        <div className="show-work-portfolio">{work}</div>
      </div>
    );
  }
}
export default Portfolio;
