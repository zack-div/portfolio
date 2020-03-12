import React, { Component } from "react";
import "../Creative/Creative.css";

class Creative extends Component {
  render() {
    return (
      <div>
        <div className="creative-director bg">
          <div className="creative-img">
            <img src="./images/women.jpg" alt="img" />
          </div>
          <div className="creative">
            <h1>This is Me</h1>
            <h2>Creative director</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quo autem distinctio perferendis! Modi iure totam est
              alias quia doloremque laborum velit quisquam vitae, asperiores,
              sunt expedita quasi ea esse?
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Creative;
