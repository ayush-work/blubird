import React, { useState, useEffect } from "react";
import "boxicons";
import "./userprofile.css";
import Avatar from "@material-ui/core/Avatar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import moment from "moment";
const UserProfile = () => {
  const [loginTime, setLoginTime] = useState({});

  const user = useSelector(selectUser);
  const [currentUser] = useAuthState(auth);
  useEffect(() => {
    setLoginTime({
      creationTime: moment(currentUser.metadata.creationTime).format("lll"),
      lastSignIn: moment(currentUser.metadata.lastSignInTime).format("lll"),
    });
  }, [user]);
  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="userprofile">
      <Avatar src={user?.photoURL}></Avatar>

      <div className="userprofile__info">
        <h1>{user?.userName}</h1>
        <h2>@{user?.uID}</h2>
      </div>
      <div className="userprofile__setting" onClick={signOut}>
        <box-icon name="dots-horizontal-rounded"></box-icon>
      </div>
    </div>
  );
};

export default UserProfile;
