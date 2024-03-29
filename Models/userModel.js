import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  // dob: { type: Date, required: false },
  profile: { type: String, required: false, trim: true },
});

export default model("user-db", userSchema);
