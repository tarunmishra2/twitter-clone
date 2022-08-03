import React from 'react';
import Home from "./Home"
import Login from "./Login"
import ProfileCard from "./profile/ProfileCard"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<ProfileCard />} />
      </Routes>
    </Router>
  );
}

export default App;