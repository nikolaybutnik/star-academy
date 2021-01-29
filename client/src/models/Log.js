const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create another document collection.
// log the auth event, add record. {user id, timestamp}

const logSchema = new Schema({
  userId: {
    type: String,
  },
  log: {
    type: Date,
  },
})

const Log = mongoose.model('Log', logSchema)

module.exports = Log
