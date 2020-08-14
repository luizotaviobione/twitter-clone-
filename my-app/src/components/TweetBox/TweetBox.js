import React from "react";
import { Avatar, Button } from "@material-ui/core";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar
            className="tweetBox_avatar"
            src="https://pbs.twimg.com/profile_images/1159961790928887808/fUZEkYKG_400x400.jpg"
          />
          <input type="text" placeholder="O que está acontecendo?"></input>
        </div>
        <input
          className="tweetBox_inputImage"
          placeholder="Optional: Enter image Url"
        ></input>
        <Button className="tweet_Button">Tweetar</Button>
      </form>
    </div>
  );
}

export default TweetBox;
