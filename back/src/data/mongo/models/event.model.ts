import mongoose, { HydratedDocument } from "mongoose";
import { IEvent, eventStatus } from "../../../config/interfaces/event.interface";
const { Schema } = mongoose;

export type EventDocument = HydratedDocument<IEvent>;

const { SCHEDULED, PENDING, CONFIRMED, COMPLETED, CANCELLED } = eventStatus;

const eventSchema = new Schema({
  organizerId: { 
    type: Schema.Types.ObjectId, 
    ref: "User" 
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  location: {
    type: String,
    required: true,
  },
  isPrivate: {
    type: Boolean,
    required: true,
  },
  tags: [{type: String}],
  status: {
    type: String,
    enum: [SCHEDULED, PENDING, CONFIRMED, COMPLETED, CANCELLED],
    default: SCHEDULED,
  },
  guestIds: [{ type: Schema.Types.ObjectId }],
  expenses: [{ type: Schema.Types.ObjectId, ref: "Expense" }],
});

//indice para mejorar busquedas
eventSchema.index({ title: 'text', description: 'text' });

const Event = mongoose.model<IEvent>("Event", eventSchema);
export default Event
