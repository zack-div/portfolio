import React, { Component } from "react";
import axios from "axios";

import "../Work/Work.css";

class Work extends Component {
  state = {
    works: []
  };
  componentDidMount() {
    axios.get("js/data.json").then(res => {
      this.setState({
        works: res.data.works
      });
    });
  }
  render() {
    const works = this.state.works;
    const workList = works.map(item => {
      return (
        <div className="box" key={item.id}>
          <i className={item.icon_name} />
          <h2>{item.title}</h2>
          <hr />
          <p>{item.body}</p>
        </div>
      );
    });

    return (
      <div>
        <div className="work">
          <div className="title-work">
            <h1>
              My <span>Work</span>
            </h1>
          </div>
          <div className="box-work">{workList}</div>
        </div>
      </div>
    );
  }
}
export default Work;
