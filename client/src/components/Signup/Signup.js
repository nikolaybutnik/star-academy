import React, { useState, useEffect, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Signup.css'

import Hero from '../Hero/Hero'

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

  useEffect(() => {
    console.log(email, username, password, confirmPassword)
  }, [email, username, password, confirmPassword])

  const handleNewUser = (event) => {
    event.preventDefault()
    const newUser = {
      email: email,
      username: username,
      password: password,
      joined: new Date(),
      level: 1,
      experience: 0,
      class: 'Budding Star',
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
    history.push('/login')
  }

  return (
    <div className="wrapper">
      <div className="row">
        <div className="col">
          <Hero />
        </div>
        <div className="col">
          <form onSubmit={(event) => handleNewUser(event)}>
            <div class="form-group">
              <label for="newEmail">Email address</label>
              <input
                type="email"
                class="form-control"
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

            <div class="form-group">
              <label for="newUsername">Username</label>
              <input
                type="username"
                class="form-control"
                id="newUsername"
                placeholder="Enter username"
                onChange={(event) => setUsername(event.target.value)}
                ref={newUsernameRef}
              ></input>
            </div>

            <div class="form-group">
              <label for="newPassword">Password</label>
              <input
                type="password"
                class="form-control"
                id="newPassword"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
                ref={newPasswordRef}
              ></input>
            </div>

            <div class="form-group">
              <label for="confirmNewPassword">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="confirmNewPassword"
                placeholder="Confirm password"
                onChange={(event) => setConfirmPassword(event.target.value)}
                ref={confirmNewPasswrdRef}
              ></input>
              <button type="submit" class="btn btn-primary">
                Sign Up
              </button>
            </div>

            <div class="form-group">
              <small id="redirectSignin" class="form-text text-muted">
                Already have an account?
              </small>
              <Link to="/login">
                <button type="submit" class="btn btn-primary">
                  Sign In
                </button>
              </Link>
            </div>
            {/* <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              ></input>
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
