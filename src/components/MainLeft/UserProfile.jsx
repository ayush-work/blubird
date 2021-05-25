import React from "react";
import "boxicons";
import "./userprofile.css";
import Avatar from "@material-ui/core/Avatar";
import ProfilePic from "../../pp.jpeg";
const UserProfile = () => {
  return (
    <div className="userprofile">
      <Avatar src={ProfilePic}></Avatar>

      <div className="userprofile__info">
        <h1>Ayush</h1>
        <h2>@idntknw0_0</h2>
      </div>
      <div className="userprofile__setting">
        <box-icon name="dots-horizontal-rounded"></box-icon>
      </div>
    </div>
  );
};

export default UserProfile;
