import mongoose from 'mongoose'
const { Schema } = mongoose;

const expenseSchema = new Schema({
  description: String,
  amount: Number,
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  eventId: { type: Schema.Types.ObjectId, ref: 'Event' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Expense', expenseSchema);