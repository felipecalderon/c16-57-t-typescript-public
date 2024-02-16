import { Document, Schema } from "mongoose";

export interface IExpense extends Document {
    description: string;
    amount: Number;
    userId: Schema.Types.ObjectId;
    eventId: Schema.Types.ObjectId;
    createdAt: string;
}