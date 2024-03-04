import mongoose, { Schema } from "mongoose";
import { IUser } from "../../../config/interfaces/user.interface";

const userSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  signUpDate: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
  },
  interestIds: [
    {
      type: String,
    },
  ],
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
  expenses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Expense",
    },
  ],
});

const User = mongoose.model<IUser>("User", userSchema)
export default User
