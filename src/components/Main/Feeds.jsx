import React, { useEffect, useState } from "react";
import Feed from "./Feed";
import "./feeds.css";
import data from "../../data";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import { db } from "../../firebase";
const Feeds = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  });
  return (
    <div className="feeds">
      {posts.map((post) => {
        return <Feed {...post}></Feed>;
      })}
    </div>
  );
};

export default Feeds;
