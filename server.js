const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001
const app = express()
const mongoose = require('mongoose')
const User = require('./client/src/models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 14
const authorize = require('./client/src/middleware/auth')

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

// Register a new user.
app.post('/auth/users', async (req, res) => {
  try {
    // Check if user email is in database.
    const userExists = !!(await User.countDocuments({ email: req.body.email }))
    if (userExists) {
      return res.status(400).send({
        errors: [
          {
            status: 'Bad Request',
            code: '400',
            title: 'Validation Error',
            detail: `Email address '${req.body.email}' is already registered.`,
            source: { pointer: '/data/attributes/email' },
          },
        ],
      })
    }
    // Intercept the body of the request and hash the password.
    const newUser = {
      ...req.body,
      password: await bcrypt.hash(req.body.password, saltRounds),
    }
    User.create(newUser)
      .then((user) => {
        res.status(201).send({ data: newUser })
      })
      .catch((err) => {
        res.status(400).json(err)
      })
  } catch (err) {
    debug('Error saving new user: ', err.message)
    res.status(500).send({
      errors: [
        {
          status: 'Server error',
          code: '500',
          title: 'Problem saving document to the database.',
        },
      ],
    })
  }
})

// Login a user and return an authentication token
app.post('/auth/tokens', async (req, res) => {
  // Find if the user with the provided email exists. All the logic is in the User model.
  const { email, password } = req.body
  try {
    const user = await User.authenticate(email, password)

    // What we get back will either be a user object or null.
    if (!user) {
      return res.status(401).send({
        errors: [
          {
            status: 'Unauthorized',
            code: '401',
            title: 'Incorrect username or password.',
          },
        ],
      })
    }
    // If all is good, return a token. The method is defined in the User model.
    res.status(201).send({ data: { token: user.generateAuthToken() } })
  } catch (err) {
    debug(`Error authenticating user ... `, err.message)
    res.status(500).send({
      errors: [
        {
          status: 'Server error',
          code: '500',
          title: 'Problem saving document to the database.',
        },
      ],
    })
  }
})

// Verify a user by the token. If verified, return the user.
app.get('/auth/users/me', authorize, async (req, res) => {
  console.log(req.user)
  const user = await User.findById(req.user._id)
  console.log(user)
  res.send({ data: user })
})

// Create an API route that gets a user by id if a user is currently logged in.
app.get('/auth/users/loggedin', (req, res) => {
  console.log(req)
})

// This route will be used for any edits that need to be made to the user object
app.patch('/edituser/:item', (req, res) => {
  const item = req.params.item
})

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})
