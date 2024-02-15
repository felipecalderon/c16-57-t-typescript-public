import { Document, Schema } from "mongoose";

export interface IUser extends Document {
    name: string;
    age: string;
    email: string;
    password: string;
    signUpDate: Date;
    location: string;
    interestIds: string[];
    events: Schema.Types.ObjectId[];
    expenses: Schema.Types.ObjectId[];
  }