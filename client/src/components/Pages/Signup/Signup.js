/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react'
import { useHistory, Link } from 'react-router-dom'
import './Signup.css'
import Hero from '../../Hero/Hero'

function Signup() {
  const history = useHistory()

  // Reference input fields
  const newEmailRef = useRef()
  const newUsernameRef = useRef()
  const newPasswordRef = useRef()
  const confirmNewPasswrdRef = useRef()

  // Set up input field states
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleNewUser = (event) => {
    event.preventDefault()
    if (password === confirmPassword) {
      const newUser = {
        email: email,
        username: username,
        password: password,
        level: 1,
        experience: 0,
        experienceToNextLevel: 15,
        totalExperience: 0,
        correct: 0,
        incorrect: 0,
        streak: 1,
        class: 'Beginner',
        energy: { value: 3, timestamp: new Date() },
        maxEnergy: 3,
        tasks: [],
        answered: [],
        calendar: [
          { weekDay: 1, style: null },
          { weekDay: 2, style: null },
          { weekDay: 3, style: null },
          { weekDay: 4, style: null },
          { weekDay: 5, style: null },
          { weekDay: 6, style: null },
          { weekDay: 0, style: null },
        ],
      }

      fetch('/auth/users', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
      setEmail('')
      setUsername('')
      setPassword('')
      setConfirmPassword('')
      history.push('/')
    } else {
      console.log("Passwords don't match.")
      newPasswordRef.current.value = ''
      confirmNewPasswrdRef.current.value = ''
    }
  }

  return (
    <div
      className="row signup-row"
      style={{
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <div className="hero-column">
        <Hero />
      </div>

      <div className="signup-column">
        <form onSubmit={(event) => handleNewUser(event)}>
          <div className="form-group sign-up-form">
            <h2 style={{ marginBottom: '10px', marginTop: '10px' }}>Sign up</h2>
            <label htmlFor="newEmail" style={{ float: 'left' }}>
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="newEmail"
              aria-describedby="emailHelp"
              placeholder=""
              onChange={(event) => setEmail(event.target.value)}
              ref={newEmailRef}
            ></input>
          </div>

          <div className="form-group sign-up-form">
            <label htmlFor="newUsername" style={{ float: 'left' }}>
              Bandname
            </label>
            <input
              type="username"
              className="form-control"
              id="newUsername"
              placeholder=""
              onChange={(event) => setUsername(event.target.value)}
              ref={newUsernameRef}
            ></input>
          </div>

          <div className="form-group sign-up-form">
            <label htmlFor="newPassword" style={{ float: 'left' }}>
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder=""
              onChange={(event) => setPassword(event.target.value)}
              ref={newPasswordRef}
            ></input>
          </div>

          <div className="form-group sign-up-form">
            <label htmlFor="confirmNewPassword" style={{ float: 'left' }}>
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmNewPassword"
              placeholder=""
              onChange={(event) => setConfirmPassword(event.target.value)}
              ref={confirmNewPasswrdRef}
            ></input>
          </div>
          <div className="form-group sign-up-form">
            <button
              href=""
              type="submit"
              className="btn-gradient col-md-9 blue mini signup-btn"
              style={{ marginTop: '20px' }}
            >
              {' '}
              Sign Up
            </button>
            <small id="redirectSignin" className="form-text text-muted">
              Already have an account?
            </small>
            <Link to="/">
              <button
                type="submit"
                className="btn-gradient col-md-9 blue mini  signup-btn"
              >
                Sign In
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
