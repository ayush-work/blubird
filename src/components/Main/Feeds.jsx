import React, { useEffect, useState } from "react";
import Feed from "./Feed";
import "./feeds.css";

import { db } from "../../firebase";

const Feeds = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div className="feeds">
      {posts.map((post, idx) => {
        return <Feed {...post} key={idx}></Feed>;
      })}
    </div>
  );
};

export default Feeds;
