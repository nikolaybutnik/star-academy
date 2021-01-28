import React, { useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'

import ProfileHeader from '../Header/ProfileHeader'
import Calendar from '../Calendar/Calendar'
import ProfileUserInfo from '../ProfileUserInfo/ProfileUserInfo'
import ProfileUserTier from '../ProfileUserTier/ProfileUserTier'
import HomePageButtons from '../HomePageButtons/HomePageButtons'
// import Header from '../Header/Header'

import UserContext from '../../utils/UserContext'

import './UserProfile.css'
import { Container } from 'react-bootstrap'

const UserProfile = () => {
  // Currently logged in user
  const user = useContext(UserContext) || localStorage.getItem('user')

  // Check if user has previosuly logged in when page loads.
  useEffect(() => {
    console.log(user)
    // On page render, check if user context exists. If not, check if user
    // id exists in local storage. If yes, fetch user object. if not, redirect.
  }, [])

  if (!user) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <div className="home-page">
        {/* <Header /> */}
        <ProfileHeader />
      </div>
      <div className="main-page-body">
        <div className="row">
          <ProfileUserTier />
          <div className="col-md-7">
            <ProfileUserInfo />
            <HomePageButtons />
            <Container
              style={{
                maxWidth: '730px',
                width: '100%',
                paddingRight: '0px',
                paddingLeft: '0px',
                marginRight: 'auto',
                marginLeft: 'auto',
              }}
            >
              <Calendar />
            </Container>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
