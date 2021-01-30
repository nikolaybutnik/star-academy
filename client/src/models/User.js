const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 14
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: 'Email is required',
  },
  username: {
    type: String,
    trim: true,
    required: 'Username is required',
  },
  password: {
    type: String,
    trim: true,
    required: 'Password is required',
  },

  correct: {
    type: Number,
  },
  incorrect: {
    type: Number,
  },

  level: {
    type: Number,
  },
  experience: {
    type: Number,
  },
  experienceToNextLevel: {
    type: Number,
  },
  totalExperience: {
    type: Number,
  },
  class: {
    type: String,
  },
  energy: {
    type: Number,
  },
  maxEnergy: {
    type: Number,
  },
  answered: {
    type: Array,
  },
  tasks: {
    type: Array,
  },
})

// Do not use an arrow function here. We need 'this' inside the function to
// reference the instatiated model object.
userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, 'secret')
}

// This code removes the password property from the user object is returned.
userSchema.methods.toJSON = function () {
  const obj = this.toObject()
  delete obj.password
  delete obj.__v
  return obj
}

userSchema.statics.authenticate = async function (email, password) {
  const user = await this.findOne({ email: email })
  // If a user is returned, accept password. If not, generate a dummy hash password.
  // This is to mask the difference in response time when the user provides valid/invalid
  // email. Hackers can use this difference in time to their advantage, so we want to run
  // bcrypt.compare() whether we get a valid user or not.
  const hashedPassword = user
    ? user.password
    : `$2b$${saltRounds}$userinvalidohfiughsieudhfe984728y5t8yw4hptighskgbkjdshb`

  // Compare the hashed password to the user payload password, or the generated dummy password.
  const passwordDidMatch = await bcrypt.compare(password, hashedPassword)
  // console.log(passwordDidMatch)

  // If the email didn't match, mongo returns null, this we need to replicate this.
  return passwordDidMatch ? user : null
}

const User = mongoose.model('User', userSchema)

module.exports = User
