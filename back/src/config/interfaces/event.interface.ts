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
  tags: string[] | string;
  organizerId: Schema.Types.ObjectId;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  isPrivate: boolean;
  location: string;
  status: eventStatus;
  guestIds: string[];
  expenses: string[];
}
