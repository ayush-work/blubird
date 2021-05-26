import React from "react";
import TrillLogo from "../origami.png";
import "./MainLeft/mainleft.css";
import "./logo.css";
const Logo = () => {
  return (
    <div className="logo">
      trill <img src={TrillLogo} alt="" className="mainleft__logo__img" />
    </div>
  );
};

export default Logo;
