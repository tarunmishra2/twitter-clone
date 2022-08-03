import React from "react";
import Tweet from "./Tweet.jsx";
import "./Feed.css";

function Feed({ tweets }) {
  return (
    <ul className="feed">
      {tweets
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map(({ id, userName, date, tweet }) => (
        <li key={id} className="feed-item">
          <Tweet userName={userName} date={date}>
            {tweet}
          </Tweet>
        </li>
      ))}
    </ul>
  );
}

export default Feed;
