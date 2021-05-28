import React, { useEffect, useState } from "react";
import Feed from "./Feed";
import "./feeds.css";
import FlipMove from "react-flip-move";
import { Flipper, Flipped } from "react-flip-toolkit";

import { db } from "../../firebase";

const Feeds = () => {
  let i = 0;
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
      <Flipper flipKey={++i}>
        {posts?.map((post, idx) => {
          return <Feed {...post} key={idx} flipId={i}></Feed>;
        })}
      </Flipper>
    </div>
  );
};

export default Feeds;
