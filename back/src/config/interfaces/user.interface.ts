import { Document, Schema } from "mongoose";

export interface IUser extends Document {
    name: string;
    age: Number;
    email: string;
    password: string;
    signUpDate: Date;
    location: string;
    interestIds?: string[];
    events?: Schema.Types.ObjectId[];
    expenses?: Schema.Types.ObjectId[];
  }