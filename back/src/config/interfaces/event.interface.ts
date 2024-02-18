import { Document, Schema } from "mongoose";

export enum eventStatus {
  SCHEDULED = "scheduled",
  PENDING = "pending",
  CONFIRMED = "confirmed",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export interface IEvent extends Document {
  title: string;
  description: string;
  organizerId: Schema.Types.ObjectId;
  dateTime: Date;
  location: string;
  status: eventStatus;
  guestIds: string[];
  expenses: Schema.Types.ObjectId[];
}
