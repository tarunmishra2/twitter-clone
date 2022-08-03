import React from 'react'
import './Profile.css'

const Profile = ({name, email, gender, country}) => {
    return (
        <div className= "profile">
            <div className="container">
                <p><span className="text-content">{name}</span> <br/> 
                <p>{email}</p>
                {gender} <br/> 
                {country}
                </p>
            </div>
        </div>
    )
}

export default Profile