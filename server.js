const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001
const app = express()
const mongoose = require('mongoose')
const User = require('./client/src/models/User')

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
app.post('/newuser', (req, res) => {
  // console.log(req.body)
  User.create(req.body)
    .then((newUser) => {
      res.json(newUser)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

// This route will be used to fetch the user object from the database
app.get('/getuser', (req, res) => {
  //////////
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
