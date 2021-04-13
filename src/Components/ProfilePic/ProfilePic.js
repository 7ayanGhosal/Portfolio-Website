import React, { Component } from "react";
import classes from "./ProfilePic.css";
import image from "../../Assets/ProfilePic/img.jpg";

class ProfilePic extends Component {
  render() {
    return (
      <div className={classes.ProfilePic}>
        <div>
          <img src={image} alt="My Image" />
        </div>
      </div>
    );
  }
}

export default ProfilePic;
