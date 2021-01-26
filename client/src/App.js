import React, { useState, useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";
import "./components/Pages/Signup/Signup.css";

import Signup from "./components/Pages/Signup/Signup";
import Hero from "./components/Hero/Hero";
// import Header from './components/Header/Header'
import Quiz from "./components/Pages/Quiz/Quiz";
import UserProfile from "./components/UserProfile/UserProfile";

import UserContext from "./utils/UserContext";

function App() {
  // Reference input fields
  const emailRef = useRef();
  const passwordRef = useRef();

  // Currently logged in user state
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    joined: "",
    level: 0,
    experience: 0,
    class: "",
    energy: 0,
    maxEnergy: 0,
    answered: [],
    firstName: "",
    lastName: "",
    gender: "",
    birthday: "",
    country: "",
  });

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const checkLogin = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    // Fetch the user's data from the server on form submission.
    // If user data exists, ssave it to local storage.
    if (emailRef.current.value && passwordRef.current.value) {
      fetch("/auth/tokens", {
        method: "POST",
        body: JSON.stringify(checkLogin),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json(res))
        .then((retrievedUserToken) => {
          if (retrievedUserToken) {
            emailRef.current.value = "";
            passwordRef.current.value = "";
            fetch("/auth/users/me", {
              method: "GET",
              headers: {
                Authorization: "Bearer " + retrievedUserToken.data.token,
              },
            })
              .then((res) => res.json())
              .then((data) => {
                setUser(data.data);
              });
          } else {
            console.log("User not found.");
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log("Email and password are required.");
    }
  };

  return (
    <UserContext.Provider value={user}>
      <Router>
        <div className="container col-md-12">
          {/* <Header /> */}
          <Route exact path="/">
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
                    <h2 style={{ marginBottom: "40px", marginTop: "40px" }}>
                      Login
                    </h2>
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
                  {/* <Link to="/quiz">
                      <button type="submit" className="btn btn-primary">
                        GO TO QUESTIONS
                      </button>
                    </Link> */}
                </form>
              </div>
            </div>
          </Route>
          <Route exact path="/signup" component={Signup} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/userprofile" component={UserProfile} />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
