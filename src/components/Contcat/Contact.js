import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-page">
        <div className="title-contact">
          <h1>contcat</h1>
        </div>
        <div className="contact">
          <input type="text" id="name" placeholder="Your name" />
          <input type="text" id="email" placeholder="Your Email" />
          <input type="text" id="subject" placeholder="Your subject" />
          <textarea
            name="message"
            id="msg"
            cols={30}
            rows={10}
            placeholder="Your message"
            defaultValue={""}
          />
          <input type="submit" id="submit" defaultValue="Send" />
        </div>
      </div>
    );
  }
}
