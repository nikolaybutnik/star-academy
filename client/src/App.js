import React, { useState, useRef, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'

import Signup from './components/Pages/Signup/Signup'
import Hero from './components/Hero/Hero'
// import Login from './components/Pages/Login/Login'
// import Header from './components/Header/Header'
import Quiz from './components/Pages/Quiz/Quiz'
import UserProfile from './components/UserProfile/UserProfile'

function App() {
  // Reference input fields
  const emailRef = useRef()
  const passwordRef = useRef()

  // Currently logged in user state
  const [user, setUser] = useState()

  // Check if user has previosuly logged in when page loads.
  // LOOK INTO USING CONTEXT PROVIDER INSTEAD
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      console.log(foundUser)
      setUser(foundUser)
    }
  }, [])

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // NOTE: HANDLE AUTHENTICATION PROCESS

    const checkLogin = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    // Fetch the user's data from the server on form submission.
    // If user data exists, ssave it to local storage.
    if (emailRef.current.value && passwordRef.current.value) {
      fetch('/getuser', {
        method: 'POST',
        body: JSON.stringify(checkLogin),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json(res))
        .then((retrievedUser) => {
          if (retrievedUser) {
            console.log(retrievedUser)
            emailRef.current.value = ''
            passwordRef.current.value = ''
            // Set the retrieved user as a state.
            setUser(retrievedUser)
            // Store the user in local storage.
            // NOTE: REFACTOR LATER, THIS WAY EXPOSES USER'S PERSONAL INFO
            // LOOK INTO TOKENS
            // IMPLEMENT LOGOUT BUTTON
            // setUser()
            // localStorage.clear();
            localStorage.setItem('user', JSON.stringify(retrievedUser))
          } else {
            console.log('User not found.')
          }
        })
        .catch((err) => console.log(err))
    } else {
      console.log('Email and password are required.')
    }
  }

  // if (user) {
  //   return <div>{user.username} is logged in</div>
  // }

  return (
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
                    <small id="redirectSignin" className="form-text text-muted">
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
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/signup" component={Signup} />
        <Route path="/quiz" component={Quiz} />
        {/* <Route
          path="/userprofile"
          component={(props) => (
            <UserProfile {...props} user={user} setUser={setUser} />
          )}
        /> */}
        <Route path="/userprofile" component={UserProfile} />
      </div>
    </Router>
  )
}

export default App
