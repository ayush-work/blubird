import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import "./feed.css";
import "boxicons";
import { db } from "../../firebase";
import firebase from "firebase";
const Feed = ({
  imgURL,
  desc,
  uName,
  uID,
  verified,
  timeStamp,
  photoURL,
  postID,
  likes,
  likedBy,
}) => {
  const user = useSelector(selectUser);
  const [toggle, setToggle] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleLikes = () => {
    if (!likedBy.includes(user?.photoURL)) {
      db.collection("posts")
        .doc(postID)
        .update("likes", likes + 1);
      db.collection("posts")
        .doc(postID)
        .update({
          likedBy: firebase.firestore.FieldValue.arrayUnion(user?.photoURL),
        });
    }

    console.log("clicked");
  };

  return (
    <div className="feed">
      <div className="feed__top__wrapper">
        <div className="feed__top">
          <Avatar src={photoURL}></Avatar>
          <div className="feed__top__info">
            <h1>{uName}</h1>
            {verified && (
              <box-icon
                type="solid"
                name="badge-check"
                color="#5e7ce2"
              ></box-icon>
            )}
            <h2>@{uID}</h2>
          </div>
        </div>
        <div className="feed__top__delete">
          <box-icon name="x" color="#DC143C"></box-icon>
        </div>
      </div>
      <div className="feed__mid">
        <div className="feed__mid__text">{desc}</div>
        <div className="feed__mid__img">
          <img src={imgURL} alt="" />
        </div>
      </div>

      <div className="feed__bottom">
        <div className="feed__bottom__icons">
          <div className="feed__bottom__icon">
            <box-icon name="message-rounded" onClick={handleToggle}></box-icon>
            <span>350</span>
          </div>
          {/* <div className="feed__bottom__icon">
            <box-icon name="repost"></box-icon>
            <span>350</span>
          </div> */}
          <div className="feed__bottom__icon" onClick={handleLikes}>
            <box-icon name="heart" color={likes ? "red" : ""}></box-icon>
            <span>{likes}</span>
          </div>

          <box-icon name="share"></box-icon>
        </div>
      </div>
      {toggle ? (
        <div className="comment__box">
          <input type="text" placeholder="Comment here" />
          <box-icon name="send"></box-icon>
        </div>
      ) : (
        ""
      )}
      {likedBy?.map((liker) => {
        return <Avatar src={liker}></Avatar>;
      })}
    </div>
  );
};

export default Feed;
