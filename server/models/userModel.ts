import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    // auth data to store
    email: {
      type: String,
      required: [true, "Email Required"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Invalid Email"],
    },
    password: {
      type: String,
      required: [true, "Password Required "],
      minlength: [6, "Minimum password length is 6"],
    },
  },
  {
    collection: "users",
    timestamps: true,
  },
);

const User = mongoose.model("user", userSchema);

export default User;
