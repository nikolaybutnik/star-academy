/* eslint-disable no-unused-vars */
import { useUser } from '../../../../utils/UserContext'
import React from 'react'
import ToDoList from './ToDoList'
import HomePageButtons from '../HomePageButtons/HomePageButtons'
import { Container } from 'react-bootstrap'
import Calendar from '../Calendar/Calendar'

const ProfileUserInfo = () => {
  // Currently logged in user
  const { user } = useUser()

  return (
    // check if user id exists in context. if not, get id from local storage and fetch.
    // if none exists, redirect to login page.
    <div
      className="row col-md-12"
      style={{ marginTop: '40px', justifyContent: 'center' }}
    >
      <div className="col-md-12" style={{ justifyContent: 'center' }}>
        <ToDoList />
        <HomePageButtons />
      </div>
      <Container className="calendar-container col-md-12">
        <Calendar />
      </Container>
    </div>
  )
}

export default ProfileUserInfo
