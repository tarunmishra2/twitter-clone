import React, { useState, useEffect } from 'react';
import ComposeForm from './ComposeForm';
import Feed from './Feed';
import { FaTwitter } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import './App.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios"


const NewUser = 'johnnydoe';
const current = new Date();
const NewDate = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

function Home() {
 const [data, setData] = useState([])
 const [input, setInput] = useState("")
 const [tweets, setTweets] = useState([])
 const [searchData, setSearchData] = useState([])

//  ========== CALLING TWEET API ==========
 async function getData(){
   const res = await axios.get("https://tweetnow.free.beeceptor.com")
   setData(res.data)
   setTweets(res.data)
   setSearchData(res.data)
  }
  
  useEffect(() => {
    getData()
  }, [])

  // ========== CHECKING SEARCH INPUT WITH TWEETS ==========
   useEffect(() => {
        setSearchData([])
        searchData.filter(val => {
            if(val.tweet.toLowerCase().includes(input.toLowerCase()) 
            || val.userName.toLowerCase().includes(input.toLowerCase())){
                setSearchData(result => [...result, val])
            }
        })
    })

// ========= NEW TWEET APPEND =========
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

  // ========== JSX ELEMENTS ==========
  return (
    <div className="app">
      {/* TOP ICONS */}
      <FaTwitter className="app-logo" size="2em" />
      <FaUserCircle className='profile-logo' size="2rem" onClick={() => navigate("/profile")} />
      {/* LOGOUT BUTTON */}
      <button onClick={() => navigate("/")} className='logout' >Log out</button>
      <div className="search">
        {/* SEARCH ICON */}
        <FaSearch className='search-icon' /><input onChange={e => setInput(e.target.value)} type="text" placeholder="Search" className='searchbar' />
      </div>
      {/* POST NEW TWEET */}
      <ComposeForm onSubmit={handlePostTweet} />
      <div className="separator"></div>
      {/* HOME FEED */}
      <Feed tweets={tweets} />
    </div>
  );
}

export default Home;