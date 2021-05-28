import React, { useState, forwardRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import "./feed.css";
import "boxicons";
import { db } from "../../firebase";
import firebase from "firebase";
import { Flipped } from "react-flip-toolkit";
const Feed = forwardRef(
  (
    {
      imgUrl,
      desc,
      uName,
      uID,
      verified,
      timeStamp,
      postTime,
      photoURL,
      postID,
      likes,
      likedBy,
      flipId,
    },
    ref
  ) => {
    const user = useSelector(selectUser);
    const [toggle, setToggle] = useState(false);
    const [likeCount, setLikeCount] = useState(false);
    const [showLikers, setShowLikers] = useState(false);
    const handleToggle = () => {
      setToggle(!toggle);
    };
    const handleLikes = () => {
      if (!likedBy?.includes(user?.photoURL)) {
        db.collection("posts")
          .doc(postID)
          .update("likes", likes + 1);
        db.collection("posts")
          .doc(postID)
          .update({
            likedBy: firebase.firestore.FieldValue.arrayUnion(user?.photoURL),
          });
        setLikeCount(true);
      }
    };

    return (
      <>
        <Flipped flipId={flipId} stagger>
          <div className="feed" ref={ref}>
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
                <img src={imgUrl} alt="" />
              </div>
            </div>

            <div className="feed__bottom">
              <div className="feed__bottom__icons">
                <div className="feed__bottom__icon">
                  <box-icon
                    name="message-rounded"
                    onClick={handleToggle}
                  ></box-icon>
                  <span>0</span>
                </div>

                <div className="feed__bottom__icon" onClick={handleLikes}>
                  <box-icon
                    name="heart"
                    color={likeCount ? "#5e7ce2" : "#eff2fc"}
                    type="solid"
                  ></box-icon>
                  <span>{likes}</span>
                </div>
                <h6>{postTime}</h6>
              </div>
            </div>

            <div className="liker__container">
              <div></div>
              <div className="like__modal">
                <h1 className="likedby">Liked By:</h1>
                {likedBy?.map((liker, idx) => {
                  return (
                    <img
                      src={liker}
                      key={idx}
                      className="like__modal__avatar"
                    ></img>
                  );
                })}
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
          </div>
        </Flipped>
      </>
    );
  }
);

export default Feed;
