const mongoose = require('mongoose');
const {Schema} = mongoose;
const messageSchema = new Schema({
    message: { 
    type: String,
    required: true },
    scheduledTime: {
    type: Date, 
    required: true },

},{timestamps:true,strict:false});

module.exports = mongoose.model("Message",messageSchema,'Message');