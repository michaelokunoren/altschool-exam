import React from 'react'
import '../styles/Home.css'

function Profile({currentUsers}) {

  return (
    <div className='user-box'>
        <div className="user-photo">
            <img src={currentUsers.avatar_url} alt={currentUsers.name} style={{width: 150}} />
        </div>
        <div className="user-about">
            <h3>{currentUsers.bio}</h3>
            <p>I'm currently studying frontend Engineering at Altschool Africa, also a model and hair-stylist, currently learning Javascript and React,js. Feel free to contact me michaelokunoren28@gmail.com</p>
        </div>
    </div>
  )
}

export default Profile