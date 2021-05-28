import React, { useState, useRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./tweetform.css";
import "boxicons";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import { db, storage } from "../../firebase";
import firebase from "firebase";
import moment from "moment";

const TweetForm = () => {
  const inputRef = useRef(null);
  const user = useSelector(selectUser);
  const [uploadImg, setUploadImg] = useState("");
  const [fileImgUrl, setFileImgUrl] = useState("");
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [fileUploding, setFileUploading] = useState(false);

  const inputHandler = (event) => {
    setInput(event.target.value);
  };
  const imgUploader = () => {
    const uploadTask = storage.ref(`/images/${uploadImg.name}`).put(uploadImg);
    setFileUploading(true);
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        console.log(snapShot);
      },
      (err) => {
        console.log(err);
      },
      () => {
        storage
          .ref("images")
          .child(uploadImg.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setFileUploading(false);
            setFileImgUrl((prevObject) => ({
              ...prevObject,
              imgURL: fireBaseUrl,
            }));
          });
      }
    );
    setDisableBtn(false);
  };
  const clickHandler = () => {
    if (input || uploadImg) {
      db.collection("posts").add({
        postID: "",
        uName: user?.userName,
        uID: user?.uID,
        desc: input,
        imgUrl: fileImgUrl ? fileImgUrl.imgURL : "",
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        postTime: moment().format("lll"),
        photoURL: user?.photoURL,
        likes: 0,
        likedBy: [],
      });

      setInput("");
      setImage("");
      setIsUploading(false);
    }
  };

  const handleImageUpload = (event) => {
    setUploadImg(event.target.files[0]);
    setIsUploading(true);
    setDisableBtn(true);
  };

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
        </div>
      </div>

      <div className="tweetform__bottom">
        <div className="tweetform__bottom__btns">
          <input
            className="tweetform__input__img"
            type="file"
            onChange={handleImageUpload}
            ref={inputRef}
          />
          {isUploading && (
            <div onClick={imgUploader} className="uploader__icon">
              <box-icon name="upload" color="#00ab66"></box-icon>
            </div>
          )}

          <h5>{fileUploding ? "Uploading..." : ""}</h5>
        </div>

        <button
          className={`tweetform__bottom__btn ${disableBtn ? "disable" : ""}`}
          onClick={clickHandler}
          disabled={disableBtn}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default TweetForm;
