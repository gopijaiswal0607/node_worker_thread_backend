const mongoose = require('mongoose')

const { Schema } = mongoose;

const policyInfoSchema = new mongoose.Schema({
  policy_id: {
    type: String,
    unique: true,
    required: true,
  },
  policy_start_date: {
    type: String,
    required: true,
  },
  policy_end_date: {
    type: String,
  },
  policy_category: {
    type: String,
  },
  collection_id: {
    type: Number,
  },
  company_collection_id: {
    type: String,
  },
  user_id: {
    type: String,
  },
}, {
  timestamps: true,
  strict: false,
});

policyInfoSchema.index({ policy_id: 1 });


module.exports = mongoose.model('PolicyInfo', policyInfoSchema, 'PolicyInfo');