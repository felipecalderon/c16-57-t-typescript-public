import mongoose from 'mongoose'
import { IExpense } from '../../../config/interfaces/expense.interface';
const { Schema } = mongoose;

const expenseSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  eventId: { type: Schema.Types.ObjectId, ref: 'Event' },
  createdAt: { type: Date, default: Date.now }
});

const Expense = mongoose.model<IExpense>('Expense', expenseSchema);
export default Expense