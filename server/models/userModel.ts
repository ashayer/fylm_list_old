import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // auth data to store
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minLength: 6 },
  },
  {
    collection: "users",
    timestamps: true,
  },
);

const User = mongoose.model("user", userSchema);

export default User;
