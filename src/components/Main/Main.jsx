import React from "react";
import "./main.css";
import MainBody from "./MainBody";
const Main = ({ title }) => {
  return (
    <>
      <div className="main">
        <div className="main__heading">
          <h1>Home</h1>
        </div>

        <MainBody></MainBody>
      </div>
    </>
  );
};

export default Main;
