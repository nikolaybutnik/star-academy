import React, { useState, useEffect, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
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

  // useEffect(() => {
  //   console.log(email, username, password, confirmPassword)
  // }, [email, username, password, confirmPassword])

  const handleNewUser = (event) => {
    // ADD LOGIC TO MAKE SURE PASSWORD AND CONFIRMATION MATCH
    // ADD LOGIC TO ENSURE THE EMAIL IS UNIQUE
    event.preventDefault()
    const newUser = {
      email: email,
      username: username,
      password: password,
      joined: new Date(),
      level: 1,
      experience: 0,
      class: 'Beginner',
      energy: 3,
      maxEnergy: 3,
      answered: [],
      firstName: '',
      lastName: '',
      gender: '',
      birthday: new Date(1800, 0, 1),
      country: '',
    }
    fetch('/newuser', {
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
  }

  return (
    <div className="wrapper">
      <div className="row">
        <div className="col">
          <Hero />
        </div>
        <div className="col">
          <form onSubmit={(event) => handleNewUser(event)}>
            <div className="form-group">
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

            <div className="form-group">
              <label for="newUsername">Username</label>
              <input
                type="username"
                className="form-control"
                id="newUsername"
                placeholder="Enter username"
                onChange={(event) => setUsername(event.target.value)}
                ref={newUsernameRef}
              ></input>
            </div>

            <div className="form-group">
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

            <div className="form-group">
              <label for="confirmNewPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmNewPassword"
                placeholder="Confirm password"
                onChange={(event) => setConfirmPassword(event.target.value)}
                ref={confirmNewPasswrdRef}
              ></input>
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>

            <div className="form-group">
              <small id="redirectSignin" className="form-text text-muted">
                Already have an account?
              </small>
              <Link to="/login">
                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>
              </Link>
            </div>
            <Link to="/quiz">
              <button type="submit" className="btn btn-primary">
                GO TO QUESTIONS
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
