import React, { useState, useRef, useEffect } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import './Login.css'

import Hero from '../../Hero/Hero'

import { UserProvider, useUser } from '../../../utils/UserContext'

function Login() {
  const history = useHistory()

  // Reference input fields
  const emailRef = useRef()
  const passwordRef = useRef()

  // Currently logged in user state
  const { user, logout, setToken } = useUser()

  useEffect(() => {
    // On page render, if user is stored in localstorage, redirect to profile
    // if (!!localStorage.getItem('user')) {
    //   console.log(true)
    //   // return <Redirect to="/userprofile" />
    //   // history.push('/userprofile')
    // }
    console.log(user)
  }, [user])

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
            // console.log(retrievedUserToken)
            emailRef.current.value = ''
            passwordRef.current.value = ''
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
  return (
    <div className="row signup-row">
      <div className="col-md-8 hero-column">
        <Hero />
      </div>
      <div className="col-md-4 signup-column">
        <form onSubmit={(event) => handleFormSubmit(event)}>
          <h1 className="signup-slogan">
            Start learning music the fun way, today!
          </h1>
          <div className="form-group sign-up-form">
            <h2 style={{ marginBottom: '40px', marginTop: '40px' }}>Login</h2>
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

          <div className="form-group  sign-up-form">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control signin-form"
              id="password"
              placeholder="Enter password"
              ref={passwordRef}
            ></input>
            <button
              type="submit"
              className="btn-gradient blue mini signup-btn col-md-9"
            >
              Sign In
            </button>
          </div>

          <div className="form-group sign-up-form">
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
          <Link to="/userprofile">
            <button type="submit" className="btn btn-primary">
              GO TO QUESTIONS
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
