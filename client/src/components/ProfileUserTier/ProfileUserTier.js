/* eslint-disable no-unused-vars */
import React from 'react'
import beginner from '../../Assets/beginnerIcon.png'
import energyIcon from '../../Assets/bolt-128.png'
import { useUser } from '../../utils/UserContext'

const ProfileUserTier = () => {
  // Currently logged in user
  const { user } = useUser()
  return (
    <div className="col-md-4" style={{ padding: '0px' }}>
      <h1 className="user-level">{user ? user.class : null}</h1>
      <img
        src={beginner}
        alt="beginner logo"
        className="user-image-profile col-md-12"
      />
      <h2>Total fans: {user.totalExperience}</h2>
    </div>
  )
}

export default ProfileUserTier
