import React, { useEffect, useState } from "react";
import Feed from "./Feed";
import "./feeds.css";
import FlipMove from "react-flip-move";

import { db } from "../../firebase";

const Feeds = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), postID: doc.id };
          })
        );
      });
  }, []);

  return (
    <div className="feeds">
      <FlipMove>
        {posts?.map((post, idx) => {
          return <Feed {...post} key={idx}></Feed>;
        })}
      </FlipMove>
    </div>
  );
};

export default Feeds;
