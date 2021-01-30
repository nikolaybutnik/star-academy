/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { Link, Redirect } from 'react-router-dom'

import Hero from '../../Hero/Hero'

import { useUser } from '../../../utils/UserContext'

function Login() {
  // Reference input fields
  const emailRef = useRef()
  const passwordRef = useRef()

  // Currently logged in user state
  const { user, setToken } = useUser()

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const checkLogin = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    // Fetch the user's data from the server on form submission.
    // If user data exists, save it to local storage.
    if (emailRef.current.value && passwordRef.current.value) {
      fetch('/auth/tokens', {
        method: 'POST',
        body: JSON.stringify(checkLogin),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json(res))
        .then((retrievedUserToken) => {
          if (retrievedUserToken) {
            setToken(retrievedUserToken.data.token)
          } else {
            console.log('User not found.')
          }
        })
        .catch((err) => console.log(err))
    } else {
      console.log('Email and password are required.')
    }
  }
  if (user) {
    return <Redirect to="/userprofile" />
  }

  return (
    <div className="row signup-row">
      <div className="hero-column">
        <Hero />
      </div>
      <div className="signup-column">
        <form onSubmit={(event) => handleFormSubmit(event)}>
          <div className="form-group sign-up-form">
            <h2 style={{ marginBottom: '20px', marginTop: '10px' }}>Login</h2>
            <label for="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              ref={emailRef}
            ></input>
          </div>

          <div className="form-group sign-up-form">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control signin-form"
              id="password"
              placeholder="Enter password"
              ref={passwordRef}
            ></input>
          </div>

          <div className="form-group sign-up-form">
            <button
              type="submit"
              className="btn-gradient blue mini signup-btn col-md-9"
            >
              Sign In
            </button>
            <small id="redirectSignin" className="form-text text-muted">
              Don't have an account yet?
            </small>
            <Link to="/signup">
              <button
                type="submit"
                className="btn-gradient blue mini signup-btn col-md-9"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
