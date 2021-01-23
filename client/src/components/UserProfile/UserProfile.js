import React from 'react'

import ProfileHeader from '../Header/ProfileHeader'
import Calendar from '../Calendar/Calendar'
import ProfileUserInfo from '../ProfileUserInfo/ProfileUserInfo'
import ProfileUserTier from '../ProfileUserTier/ProfileUserTier'
import HomePageButtons from '../HomePageButtons/HomePageButtons'

import './UserProfile.css'

const UserProfile = () => {
  return (
    <>
      <div className="home-page">
        <ProfileHeader />

        <div className="main-page-body">
          <div className="row">
            <ProfileUserTier />
            <div className="col-md-7">
              <ProfileUserInfo />
              <Calendar />
              <HomePageButtons />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile
