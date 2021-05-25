import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import ProfilePic from "../../pp.jpeg";
import "./feed.css";
import "boxicons";

const Feed = ({ imgURL, desc, uName, uID }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="feed">
      <div className="feed__top__wrapper">
        <div className="feed__top">
          <Avatar
            src={`https://ui-avatars.com/api/?background=eff2fc&name=${uName}}`}
          ></Avatar>
          <div className="feed__top__info">
            <h1>{uName}</h1>
            <box-icon
              type="solid"
              name="badge-check"
              color="#5e7ce2"
            ></box-icon>
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
          <img src={imgURL} />
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
          <div className="feed__bottom__icon">
            <box-icon name="heart"></box-icon>
            <span>350</span>
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
    </div>
  );
};

export default Feed;
