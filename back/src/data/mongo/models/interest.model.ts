import mongoose from "mongoose";
import { Iinterest } from "../../../config/interfaces/interest.interface";
const { Schema } = mongoose;

const interestSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userIds: [String],
});

module.exports = mongoose.model<Iinterest>("Interest", interestSchema);
