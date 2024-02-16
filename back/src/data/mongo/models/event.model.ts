import mongoose from "mongoose";
import { IEvent, eventStatus } from "../../../config/interfaces/event.interface";
const { Schema } = mongoose;

const { SCHEDULED, PENDING, CONFIRMED, COMPLETED, CANCELLED } = eventStatus;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  organizerId: { type: Schema.Types.ObjectId, ref: "User" },
  dateTime: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: [SCHEDULED, PENDING, CONFIRMED, COMPLETED, CANCELLED],
    required: true,
    default: SCHEDULED,
  },
  guestIds: [String],
  expenses: [{ type: Schema.Types.ObjectId, ref: "Expense" }],
});

module.exports = mongoose.model<IEvent>("Event", eventSchema);
