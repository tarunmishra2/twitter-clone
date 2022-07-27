import React, { useState } from 'react';
import ComposeForm from './ComposeForm';
import Feed from './Feed';
import { FaTwitter } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import './App.css';
import { useNavigate } from 'react-router-dom';
import initialTweets from '../tweets.json';

const NewUser = 'johnnydoe';
const current = new Date();
  const NewDate = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

function Home() {
 const [tweets, setTweets] = useState(initialTweets)

   const handlePostTweet = (tweet) => {
    const newTweet = {
      tweet,
      id: Math.floor(Math.random() * 50),
      date: NewDate,
      userName: NewUser
    };
    setTweets([...tweets, newTweet]);
  };

  const navigate = useNavigate();

  return (
    <div className="app">
      <FaTwitter className="app-logo" size="2em" />
      <FaUserCircle className='profile-logo' size="2rem" />
      <button onClick={() => {
        navigate("/")}} className='logout' >Log out</button>
      <ComposeForm onSubmit={handlePostTweet} />
      <div className="separator"></div>
      <Feed tweets={tweets} />
    </div>
  );
}

export default Home;