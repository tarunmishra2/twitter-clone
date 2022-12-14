import PropTypes from 'prop-types'
import React from "react"
import './Avatar.css'

function Avatar({ name = " " }){
    return (
        <div className='avatar'>
            {name.charAt(0)}
        </div>
    )
}

Avatar.propTypes = {
    name: PropTypes.string,
}

export default Avatar