const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001
const app = express()
const mongoose = require('mongoose')
const User = require('./client/src/models/User')
const bcrypt = require('bcrypt')
const saltRounds = 14

// Define middleware here
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Connect MongoDB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/musicplayground',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
)

// Define API routes here
app.post('/newuser', async (req, res) => {
  // Intercept the body of the request and hash the password.
  const newUser = {
    ...req.body,
    password: await bcrypt.hash(req.body.password, saltRounds),
  }
  // console.log(newUser)
  User.create(newUser)
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

// This route will be used to fetch the user object from the database
app.post('/getuser', (req, res) => {
  const checkUser = req.body
  User.findOne({ email: checkUser.email, password: checkUser.password })
    .then((user) => {
      console.log(user)
      res.json(user)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

// This route will be used for any edits that need to be made to the user object
app.patch('/edituser', (req, res) => {
  //////////
})

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})
