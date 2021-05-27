import React, { useEffect, useState } from "react";
import Feed from "./Feed";
import "./feeds.css";
import moment from "moment";

import { db } from "../../firebase";

const Feeds = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), postID: doc.id };
        })
      );
    });
  }, []);
  console.log(posts);
  return (
    <div className="feeds">
      {posts.map((post, idx) => {
        return <Feed {...post} key={idx}></Feed>;
      })}
    </div>
  );
};

export default Feeds;
