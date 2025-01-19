import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, select: false },
  role: { type: String, default: "user" }, //whenever we are protecting the route
  image: { type: String },
  //google & github provider
  authProviderId: { type: String },
});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);