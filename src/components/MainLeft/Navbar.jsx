import React from "react";
import "./navbar.css";
import Navitem from "./Navitem";
const Navbar = () => {
  return (
    <div className="navbar">
      <Navitem icon="home" title="Home" isDefault></Navitem>
      <Navitem icon="hash" title="Explore"></Navitem>
      <Navitem icon="bell" title="Notifications"></Navitem>
      <Navitem icon="bookmark-alt" title="Bookmark"></Navitem>
      <Navitem icon="list-ul" title="List"></Navitem>
      <Navitem icon="user" title="Profile"></Navitem>
      <button className="navbar__btn">Post</button>
      {/* navItems  */}
      {/* tweet */}
    </div>
  );
};

export default Navbar;
