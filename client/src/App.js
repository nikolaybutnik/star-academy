import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import Signup from './components/Pages/Signup/Signup'
import Login from './components/Pages/Login/Login'
// import Header from './components/Header/Header'
import Quiz from './components/Pages/Quiz/Quiz'
import UserProfile from './components/UserProfile/UserProfile'

function App() {
  return (
    <Router>
      <div className="container col-md-12">
        {/* <Header /> */}
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/userprofile" component={UserProfile} />
      </div>
    </Router>
  )
}

export default App
