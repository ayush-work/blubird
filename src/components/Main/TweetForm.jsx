import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import ProfilePic from "../../pp.jpeg";
import "./tweetform.css";
import "boxicons";

const TweetForm = () => {
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState("Bluweet");
  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const clickHandler = () => {
    if (input) {
      //   setMsg("Sending");
      console.log(input);
    }
    // setTimeout(() => {
    //   setMsg("Bluweet");
    // }, 2000);

    setInput("");
  };

  const accentBlue = "#5e7ce2";
  return (
    <div className="tweetform">
      <div className="tweetform__top">
        <Avatar src={ProfilePic}></Avatar>
        <textarea
          maxLength="100"
          onChange={inputHandler}
          type="text"
          placeholder="What's Cooking?"
          value={input}
        />
      </div>
      <div className="tweetform__bottom">
        <div className="tweetform__bottom__icons">
          <div className="tweet-icons">
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
          {msg}
        </button>
      </div>
    </div>
  );
};

export default TweetForm;
