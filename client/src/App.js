import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
// import Header from './components/Header/Header'
import Home from './components/Home/Home'
import UserProfile from './components/UserProfile/UserProfile'

function App() {
  return (
    <Router>
      <div className="container col-md-12">
        {/* <Header /> */}
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/userprofile" component={UserProfile} />
      </div>
    </Router>
  )
}

export default App
