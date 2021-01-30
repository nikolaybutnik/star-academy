const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create another document collection.
// log the auth event, add record. {user id, timestamp}

const attemptSchema = new Schema({
  userId: {
    type: String,
  },
  attemptLog: {
    type: Date,
  },
})

const Attempt = mongoose.model('Attempt', attemptSchema)

module.exports = Attempt
