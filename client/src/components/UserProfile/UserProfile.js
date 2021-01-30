/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'

import ProfileHeader from '../Header/ProfileHeader'
import Calendar from '../Calendar/Calendar'
import ProfileUserInfo from '../ProfileUserInfo/ProfileUserInfo'
import ProfileUserTier from '../ProfileUserTier/ProfileUserTier'
import HomePageButtons from '../HomePageButtons/HomePageButtons'

import { useUser } from '../../utils/UserContext'

import './UserProfile.css'
import { Container } from 'react-bootstrap'

const UserProfile = () => {
  // Currently logged in user
  const { user } = useUser()

  useEffect(() => {
    // console.log(user)
  }, [user])

  if (!user) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <div className="home-page">
        {/* <Header /> */}
        <ProfileHeader />
        <hr style={{ borderWidth: '2px' }}></hr>
      </div>
      <div className="main-page-body">
        <div className="row">
          <ProfileUserTier />
          <div className="col-md-8" style={{ padding: '0px' }}>
            <ProfileUserInfo />
            <HomePageButtons />
            <Container
              style={{
                width: '100%',
                paddingRight: '0px',
                paddingLeft: '0px',
                marginRight: 'auto',
                marginLeft: 'auto',
                float: 'right',
              }}
              className="col-md-11"
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
