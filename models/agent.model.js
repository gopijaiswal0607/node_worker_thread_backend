const mongoose = require('mongoose')

const { Schema } = mongoose;

const AgentSchema = new mongoose.Schema({
  agent_id: {
    type: String,
    unique: true,
    required: true,
  },
  agent_name: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  strict: false,
});

AgentSchema.index({ agent_id: 1 });


module.exports = mongoose.model('Agent', AgentSchema, 'Agent');