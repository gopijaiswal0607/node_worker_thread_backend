const mongoose = require('mongoose')

const { Schema } = mongoose;

const PolicyCarrierSchema = new mongoose.Schema({
  policy_carrier_id: {
    type: String,
    unique: true,
    required: true,
  },
  company_name: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  strict: false,
});

PolicyCarrierSchema.index({ policy_carrier_id: 1 });

module.exports = mongoose.model('PolicyCarrier', PolicyCarrierSchema, 'PolicyCarrier');