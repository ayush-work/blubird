import React from "react";
import TweetForm from "./TweetForm";
import Feeds from "./Feeds";
import "./mainbody.css";
const MainBody = () => {
  return (
    <div className="mainbody">
      <TweetForm></TweetForm>
      <div className="divider"></div>
      <Feeds></Feeds>
    </div>
  );
};

export default MainBody;
