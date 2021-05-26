import React from "react";
import "boxicons";
import "./userprofile.css";
import Avatar from "@material-ui/core/Avatar";
// import ProfilePic from "../../pp.jpeg";
// import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
const UserProfile = () => {
  const user = useSelector(selectUser);

  return (
    <div className="userprofile">
      <Avatar src={user?.photoURL}></Avatar>

      <div className="userprofile__info">
        <h1>{user?.userName}</h1>
        <h2>@{user?.uID}</h2>
      </div>
      <div className="userprofile__setting">
        <box-icon name="dots-horizontal-rounded"></box-icon>
      </div>
    </div>
  );
};

export default UserProfile;
