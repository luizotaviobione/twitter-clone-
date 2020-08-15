import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import "./TweetBox.css";
import db from "../../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Luiz Otávio",
      username: "luizbione",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1159961790928887808/fUZEkYKG_400x400.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar
            className="tweetBox_avatar"
            src="https://pbs.twimg.com/profile_images/1159961790928887808/fUZEkYKG_400x400.jpg"
          />
          <input
            onChange={(e) => {
              setTweetMessage(e.target.value);
            }}
            value={tweetMessage}
            type="text"
            placeholder="O que está acontecendo?"
          ></input>
        </div>
        <input
          className="tweetBox_inputImage"
          placeholder="Optional: Enter image Url"
          value={tweetImage}
          onChange={(e) => {
            setTweetImage(e.target.value);
          }}
        ></input>
        <Button onClick={sendTweet} className="tweet_Button">
          Tweetar
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
