const { Schema, model } = require('mongoose')

const ActionSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some text']
  },
  amount: {
    type: Number,
    required: [true, 'Please add some number']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('Action', ActionSchema)
