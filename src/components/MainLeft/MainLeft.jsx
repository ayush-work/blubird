import React from "react";
import "./mainleft.css";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";
const MainLeft = () => {
  return (
    <div className="mainleft">
      <h1 className="mainleft__logo">
        blu<span>Bird</span>
      </h1>
      <Navbar></Navbar>
      <UserProfile></UserProfile>
    </div>
  );
};

export default MainLeft;
