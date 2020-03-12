import React, { Component } from "react";
import "../SocialMedia/SocialMedia.css";
import axios from "axios";
import styled from "styled-components";

export const Social = styled.div`
  background-color: ${props => (props.item === 1 ? "#334fc1" : "")};
  background-color: ${props => (props.item === 2 ? "#1f98da" : "")};
  background-color: ${props => (props.item === 3 ? "#ce3434" : "")};
`;

class SocialMedia extends Component {
  state = {
    social: []
  };
  componentDidMount() {
    axios.get("js/data.json").then(res => {
      this.setState({
        social: res.data.social
      });
    });
  }
  render() {
    const social = this.state.social;
    const socials = social.map(item => {
      return (
        <Social className="fb" key={item.id} item={item.id}>
          {console.log(item.id)}
          <i className={item.icon} />
          <h1>
            {item.title}
            <br />
            <span>{item.body}</span>
          </h1>
        </Social>
      );
    });
    return (
      <div>
        <div className="socila-media">{socials}</div>
      </div>
    );
  }
}
export default SocialMedia;
