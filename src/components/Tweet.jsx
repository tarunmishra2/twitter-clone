import Avatar from "./Avatar";
import "./Tweet.css";
import React from "react";

function Tweet(props) {
  const { userName, date, children } = props;

  return (
    <div className="tweet">
      <Avatar name={userName} />
      <div>
        <div className="tweet-header">
            <span className="tweet-name">{userName}</span>
          <span className="tweet-user">@{userName}</span>·
          <span className="tweet-created-on">{date}</span>
        </div>
        <div className="tweet-content">{children}</div>
      </div>
    </div>
  );
}

export default Tweet;
