import React, { useState } from "react";
import "boxicons";
import "./navitem.css";
const Navitem = ({ icon, title, type, isDefault }) => {
  const accentBlue = "#5e7ce2";
  const [color, setColor] = useState("black");
  return (
    <div
      className="navitem"
      onMouseEnter={() => setColor(accentBlue)}
      onMouseLeave={() => setColor("black")}
    >
      <box-icon
        name={icon}
        className="navitem__icon"
        color={`${color === accentBlue || isDefault ? accentBlue : "black"}`}
      ></box-icon>
      <h1 className={`${isDefault && "navitem--default"}`}>{title}</h1>
    </div>
  );
};

export default Navitem;
