import mongoose, { Schema } from "mongoose";
import { IUser } from "../../../config/interfaces/user.interface";

const userSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  image: {
    type: String,
    default: 'https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-imagen-de-caricatura-de-un-astronauta-sentado-en-una-luna-ilustraci%C3%B3n-de-alta-calidad.jpg'
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
