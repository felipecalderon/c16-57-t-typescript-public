import { Document, Schema } from "mongoose";

export interface IBlackList extends Document {
    list: string[];
  }