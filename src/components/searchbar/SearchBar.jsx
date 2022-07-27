import { React, useState } from "react";
import "./SearchBar.css";
import tweets from "../../tweets.json"

function SearchBar() {
 const [query, setQuery] = useState("")
  return (
    <div>
      <input placeholder="Search" onChange={event => setQuery(event.target.value)} />
    {
    tweets.filter(tweet => {
    if (query === '') {
      return tweet;
    } else if (tweet.toLowerCase().includes(query.toLowerCase())) {
      return tweet;
    }
  }).map((id, userName, tweet, date) => (
    <div className="box" key={id}>
        {userName}
        {tweet}
        {date}
    </div>
  ))
    }
    </div>
  )
}

export default SearchBar