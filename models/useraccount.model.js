const mongoose = require('mongoose')

const { Schema } = mongoose;

const UsersAccountSchema = new mongoose.Schema({
  account_id: {
    type: String,
    unique: true,
    required: true,
  },
  account_name: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
  },
}, {
  timestamps: true,
  strict: false,
});

UsersAccountSchema.index({ account_id: 1 });

module.exports = mongoose.model('UsersAccount', UsersAccountSchema, 'UsersAccount');