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

// Handling of new user signup.
app.post('/newuser', async (req, res) => {
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
  } else {
    // Intercept the body of the request and hash the password.
    const newUser = {
      ...req.body,
      password: await bcrypt.hash(req.body.password, saltRounds),
    }

    User.create(newUser)
      .then((user) => {
        res.json(user)
      })
      .catch((err) => {
        res.status(400).json(err)
      })
  }
})

// Login a user and return an authentication token
app.post('/tokens', async (req, res) => {
  // Find if the user with the provided email exists
  const { email, password } = req.body
  const user = await User.findOne({ email: email })
  // If a user is returned, accept password. If not, generate a dummy hash password.
  // This is to mask the difference in response time when the user provides valid/invalid
  // email. Hackers can use this difference in time to their advantage, so we want to run
  // bycrypt.compare() whether we get a valid user or not.
  const hashedPassword = user
    ? user.password
    : `$2b$${saltRounds}$invalidusernameaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`

  // Compare the hashed password to the user payload password, or the generated dummy password.
  const passwordDidMatch = await bcrypt.compare(password, hashedPassword)
  if (!user || !passwordDidMatch) {
    return res.status(401).send({ errors: ['PLACEHOLDER'] })
  }

  // If all is good, return a token
  const token = 'iamatoken'
  res.status(201).send({ data: { token } })

  // if any condition failed, return an error message
})

// Fetch the user object from the database. WILL BE REPLACED.
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
