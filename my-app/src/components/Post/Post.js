import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar
          className="avatar"
          src="https://pbs.twimg.com/profile_images/1159961790928887808/fUZEkYKG_400x400.jpg"
        />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText ">
            <h3>
              Luiz{" "}
              <span className="post_headerSpecial">
                <VerifiedUserIcon className="post_badge" />
                @luizbione
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>Texto qualquer apenas para teste</p>
          </div>
        </div>
        <img
          alt=""
          src="https://media.giphy.com/media/FYqf889lXd9Ru/giphy.gif"
        />

        <div className="post_footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
