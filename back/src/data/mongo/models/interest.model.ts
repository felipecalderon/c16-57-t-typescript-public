import mongoose from 'mongoose'
const { Schema } = mongoose;

const interestSchema = new Schema({
  name: String,
  description: String,
  userIds: [String] 
});

module.exports = mongoose.model('Interest', interestSchema);