import React from 'react'
import './Profile.css'

const Status = ({ value, label, prp, id }) => {
    return (
        <div className={id}>
            <div className={prp}>
                <p> 
                <span className="stat-content">{value}</span> 
                <br/>
                {label}</p>
            </div>
        </div>
    )
};

export default Status