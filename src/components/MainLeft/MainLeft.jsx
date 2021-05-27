import React from "react";
import "./mainleft.css";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";

import Logo from "../Logo";
const MainLeft = () => {
  return (
    <div className="mainleft">
      <Logo></Logo>
      <Navbar></Navbar>
      <UserProfile></UserProfile>
    </div>
  );
};

export default MainLeft;
