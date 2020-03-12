import React, { Component } from "react";

import Home from "./../Home/Home";
import Work from "./../Work/Work";
import Portfolio from "./../Portfolio/Portfolio";
import ProfileSkills from "./../ProfileSkills/ProfileSkills";
import Creative from "./../Creative/Creative";
import SocialMedia from "./../SocialMedia/SocialMedia";
import Footer from "./../Footer/Footer";

class Index extends Component {
  render() {
    return (
      <div>
        <Home></Home>
        <Work></Work>
        <Portfolio></Portfolio>
        <ProfileSkills></ProfileSkills>
        <Creative></Creative>
        <SocialMedia></SocialMedia>
        <Footer></Footer>
      </div>
    );
  }
}

export default Index;
