import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Profile from './Profile'
import Status from './Status'
import './Profile.css'

const ProfileCard = () => {

    // ===== PROFILE API DATA =====
    const [profileData, setProfileData] = useState([])
    
    useEffect(() => {
     async function getDetails(){
        const response = await axios.get("https://tweets.free.beeceptor.com/profile")
        setProfileData(response.data)
        }
        getDetails()
    }, [])


    // ===== PROFILE STATS =====
    const stats = [
        {value: '50K', label:'Followers', prp:'box', id: 'box-1 Status'},
        {value: '6K', label:'Following', prp:'box', id: 'box-2 Status'}, 
        {value: '200', label:'Tweets', prp:'box', id: 'box-3 Status'}
    ]

        
    // ====== MAIN JSX ======
    return (
        <div className= "Card App" >
             <div className="circle">
        <img src="https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/egg-3442-4c317615ec1fd800728672f2c168aca5@1x.jpg" />
        </div>

            <Profile 
            name={profileData.first_name + " " + profileData.last_name} 
            email={profileData.email} 
            gender={profileData.gender} country={profileData.country} />

            <div className="status-divs">
                {stats.map(stat => (
                    <Status value={stat.value} label={stat.label} id={stat.id} />
                ))}
            </div>
        </div>
    )
}

export default ProfileCard