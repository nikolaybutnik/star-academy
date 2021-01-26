import React, { useState, useRef, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'

import Signup from './components/Pages/Signup/Signup'
import Hero from './components/Hero/Hero'
// import Header from './components/Header/Header'
import Quiz from './components/Pages/Quiz/Quiz'
import UserProfile from './components/UserProfile/UserProfile'

import UserContext from './utils/UserContext'

function App() {
  // Reference input fields
  const emailRef = useRef()
  const passwordRef = useRef()

  // Currently logged in user state
  const [user, setUser] = useState()

  useEffect(() => {
    console.log(user)
  }, [user])

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const checkLogin = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    // Fetch the user's data from the server on form submission.
    // If user data exists, ssave it to local storage.
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
            emailRef.current.value = ''
            passwordRef.current.value = ''
            fetch('/auth/users/me', {
              method: 'GET',
              headers: {
                Authorization: 'Bearer ' + retrievedUserToken.data.token,
              },
            })
              .then((res) => res.json())
              .then((data) => {
                // Store user id in local storage and pass into context provider.
                localStorage.setItem('user', data.data._id)
                setUser(data.data._id)
              })
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
    <UserContext.Provider value={user}>
      <Router>
        <div className="container col-md-12">
          {/* <Header /> */}
          <Route exact path="/">
            <div className="wrapper">
              <div className="row">
                <div className="col">
                  <Hero />
                </div>
                <div className="col">
                  <form onSubmit={(event) => handleFormSubmit(event)}>
                    <div className="form-group">
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

                    <div className="form-group">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        ref={passwordRef}
                      ></input>
                      <button type="submit" className="btn btn-primary">
                        Sign In
                      </button>
                    </div>

                    <div className="form-group">
                      <small
                        id="redirectSignin"
                        className="form-text text-muted"
                      >
                        Don't have an account yet?
                      </small>
                      <Link to="/signup">
                        <button type="submit" className="btn btn-primary">
                          Sign Up
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
          </Route>
          <Route exact path="/signup" component={Signup} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/userprofile" component={UserProfile} />
        </div>
      </Router>
    </UserContext.Provider>
  )
}

export default App
