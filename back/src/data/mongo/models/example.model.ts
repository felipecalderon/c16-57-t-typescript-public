import mongoose from "mongoose";

const exampleSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  userAge: {
    type: Number,
    require: true,
  },
  userEmail: {
    type: String,
    require: true,
  },
  level: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "low",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const ExampleModel = mongoose.model("Example", exampleSchema);
