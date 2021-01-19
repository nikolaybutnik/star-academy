const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    trim: true,
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
  joined: {
    type: Date,
  },
  level: {
    type: Number,
  },
  experience: {
    type: Number,
  },
  class: {
    type: String,
  },
  answered: {
    type: Array,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  gender: {
    type: String,
  },
  birthday: {
    type: Date,
  },
  country: {
    type: String,
  },
})

const User = mongoose.model('User', userSchema)

module.exports = User
