import React from "react";
import Feed from "./Feed";
import "./feeds.css";
import data from "../../data";
const Feeds = () => {
  return (
    <div className="feeds">
      {data.map((post) => {
        return <Feed {...post}></Feed>;
      })}
    </div>
  );
};

export default Feeds;
