const mongoose = require('mongoose')

const { Schema } = mongoose;

const PolicyCategorySchema = new mongoose.Schema({
  policy_category_id: {
    type: String,
    unique: true,
    required: true,
  },
  category_name: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  strict: false,
});

PolicyCategorySchema.index({ policy_category_id: 1 });

module.exports = mongoose.model('PolicyCategory', PolicyCategorySchema, 'PolicyCategory');