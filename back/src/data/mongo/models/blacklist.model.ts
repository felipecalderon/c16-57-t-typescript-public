import mongoose, { Schema } from "mongoose";
import { IBlackList } from "../../../config/interfaces/blackList.interface";

const blackListSchema = new Schema({
  list: [{
    type: String,
    required: true,
  }],
});

const BlackList = mongoose.model<IBlackList>("BlackList", blackListSchema)
export default BlackList
