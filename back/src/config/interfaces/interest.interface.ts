import { Document, Schema } from "mongoose";

export interface Iinterest extends Document {
    name: string;
    description: string;
    userIds: Schema.Types.ObjectId[];
}