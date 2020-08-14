import React from "react";
import "./Feed.css";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed_header ">
        <h2>Página inicial</h2>
      </div>
      <TweetBox />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
