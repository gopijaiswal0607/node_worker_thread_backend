const mongoose = require('mongoose')




const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    unique: true,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: String,
  },
  address: {
    type: String,
  },
  phone_number: {
    type: Number,
  },
  state: {
    type: String,
  },
  zip_code: {
    type: String,
  },
  email: {
    type: String,
    required:true
  },
  gender: {
    type: String,
    default: NA,
  },
  user_type: {
    type: String,
    default: NA,
  }
}, {
  timestamps: true,
  strict: false,
});

jobQueueSchema.index({ user_id: 1 });


module.exports = mongoose.model('User', userSchema, 'User');