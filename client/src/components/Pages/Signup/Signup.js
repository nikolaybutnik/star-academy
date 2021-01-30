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
        class: 'Beginner',
        energy: { value: 3, timestamp: new Date() },
        maxEnergy: 3,
        tasks: [],
        answered: [],
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
    <div className="row signup-row">
      <div className="hero-column">
        <Hero />
      </div>

      <div className="signup-column">
        <form onSubmit={(event) => handleNewUser(event)}>
          <div className="form-group sign-up-form">
            <h2 style={{ marginBottom: '10px', marginTop: '10px' }}>Sign up</h2>
            <label for="newEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="newEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
              ref={newEmailRef}
            ></input>
            {/* <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small> */}
          </div>

          <div className="form-group sign-up-form">
            <label for="newUsername">Bandname</label>
            <input
              type="username"
              className="form-control"
              id="newUsername"
              placeholder="Enter username"
              onChange={(event) => setUsername(event.target.value)}
              ref={newUsernameRef}
            ></input>
          </div>

          <div className="form-group sign-up-form">
            <label for="newPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)}
              ref={newPasswordRef}
            ></input>
          </div>

          <div className="form-group sign-up-form">
            <label for="confirmNewPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmNewPassword"
              placeholder="Confirm password"
              onChange={(event) => setConfirmPassword(event.target.value)}
              ref={confirmNewPasswrdRef}
            ></input>
          </div>
          <div className="form-group sign-up-form">
            <button
              href=""
              type="submit"
              class="btn-gradient col-md-9 blue mini signup-btn"
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
