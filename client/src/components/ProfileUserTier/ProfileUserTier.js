import React from 'react'
import beginner from '../../Assets/512x512.png'
import energyIcon from '../../Assets/bolt-128.png'

const ProfileUserTier = () => {
  return (
    <div className="col-md-5">
      <h1 className="user-level">BEGINNER</h1>
      <img
        src={beginner}
        alt="beginner logo"
        className="user-image-profile col-md-12"
      />

      <div className="user-tier-info col-md-12">
        <img src={energyIcon} alt="logo" className="energy-icon" />
        <h2 className="energy-level">3/4</h2>
      </div>
      <div className="user-tier-info col-md-12">
        <h6 className="energy-title">ENERGY LEVEL</h6>
      </div>
    </div>
  )
}

export default ProfileUserTier
