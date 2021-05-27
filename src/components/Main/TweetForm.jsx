import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./tweetform.css";
import "boxicons";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import { db } from "../../firebase";
import firebase from "firebase";

const TweetForm = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const [showImg, setShowImg] = useState(false);
  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const clickHandler = () => {
    if (input && user) {
      db.collection("posts").add({
        postID: "",
        uName: user?.userName,
        uID: user?.uID,
        desc: input,
        imgURL: image,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        photoURL: user?.photoURL,
        likes: 0,
        likedBy: [],
      });
    }
    setInput("");
    setImage("");
    setShowImg(false);
  };
  const getImg = () => {
    setShowImg(!showImg);
  };

  const accentBlue = "#5e7ce2";
  return (
    <div className="tweetform">
      <div className="tweetform__top">
        <Avatar src={user?.photoURL}></Avatar>
        <div className="tweetform__inputs">
          <textarea
            maxLength="100"
            onChange={inputHandler}
            type="text"
            placeholder="What's Cooking?"
            value={input}
          />
          {showImg && (
            <textarea
              className="tweetform__img"
              type="text"
              placeholder="paste image url here"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          )}
        </div>
      </div>

      <div className="tweetform__bottom">
        <div className="tweetform__bottom__icons">
          <div className="tweet-icons" onClick={getImg}>
            <box-icon name="photo-album" color={accentBlue}></box-icon>
          </div>
          <div className="tweet-icons">
            <box-icon
              type="solid"
              name="file-gif"
              color={accentBlue}
            ></box-icon>
          </div>
          <div className="tweet-icons">
            <box-icon name="poll" color={accentBlue}></box-icon>
          </div>
          <div className="tweet-icons">
            <box-icon name="smile" color={accentBlue}></box-icon>
          </div>
          <div className="tweet-icons">
            <box-icon name="calendar-week" color={accentBlue}></box-icon>
          </div>
        </div>

        <button className="tweetform__bottom__btn" onClick={clickHandler}>
          Post
        </button>
      </div>
    </div>
  );
};

export default TweetForm;
