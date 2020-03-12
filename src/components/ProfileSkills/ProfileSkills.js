import React, { Component } from "react";
import "../ProfileSkills/ProfileSkills.css";

class ProfileSkills extends Component {
  render() {
    return (
      <div>
        <div className="profile-skills">
          {/* PROFILE */}
          <div className="profile">
            <div className="profile-title">
              <h1>
                My <span>Profile</span>
              </h1>
            </div>
            <div className="profile-info">
              <h3>Name:</h3> <span>Christopher J. Weldon</span>
              <br />
              <br />
              <h3>Birthday:</h3> <span>11/22/99</span>
              <br />
              <br />
              <h3>Adress:</h3> <span>4444 5555 6666</span>
              <br />
              <br />
              <h3>Phone:</h3> <span>@Email.com</span>
              <br />
              <br />
              <h3>Website:</h3> <span>www.websites.com</span>
              <br />
              <br />
            </div>
          </div>
          {/* SKILLS */}
          <div className="skills">
            <div className="skills-title">
              <h1>
                <span>Some</span>skills
              </h1>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta.
            </p>
            <div className="skill">
              <h3>Bootstrap</h3>
              <h3>100%</h3>
            </div>
            <hr className="hr-bootstrap" />
            <div className="skill">
              <h3>CSS3</h3>
              <h3>90%</h3>
            </div>
            <hr className="hr-css3" />
            <div className="skill">
              <h3>Photoshop</h3>
              <h3>80%</h3>
            </div>
            <hr className="hr-photoshop" />
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileSkills;
