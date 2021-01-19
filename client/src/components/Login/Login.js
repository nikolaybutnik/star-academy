import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

import Hero from '../Hero/Hero'

function Login() {
  // Reference input fields
  const emailRef = useRef()
  const newPasswordRef = useRef()

  // Set up input field states
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    console.log(email, password)
  }, [email, password])

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // HANDLE SIGN IN AND AUTHENTICATION PROCESS. RESEARCH Auth0
  }

  return (
    <div className="wrapper">
      <div className="row">
        <div className="col">
          <Hero />
        </div>
        <div className="col">
          <form onSubmit={(event) => handleFormSubmit(event)}>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
                ref={emailRef}
              ></input>
              {/* <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small> */}
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
                ref={newPasswordRef}
              ></input>
              <button type="submit" class="btn btn-primary">
                Sign In
              </button>
            </div>

            <div class="form-group">
              <small id="redirectSignin" class="form-text text-muted">
                Don't have an account yet?
              </small>
              <Link to="/signup">
                <button type="submit" class="btn btn-primary">
                  Sign Up
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

export default Login
