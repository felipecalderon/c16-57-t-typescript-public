import mongoose from 'mongoose'
const { Schema } = mongoose;

const eventSchema = new Schema({
  title: String,
  description: String,
  organizerId: { type: Schema.Types.ObjectId, ref: 'User' },
  dateTime: Date,
  location: String,
  status: String,
  guestIds: [String],
  expenses: [{ type: Schema.Types.ObjectId, ref: 'Expense' }]
});

module.exports = mongoose.model('Event', eventSchema);