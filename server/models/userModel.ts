import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username Required"],
      unique: true,
      validate: [validator.isAlphanumeric, "Invalid Username"],
    },
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
    movieLikes: {
      type: [Number],
    },
    friendList: {
      type: [mongoose.Types.ObjectId],
    },
  },
  {
    collection: "users",
    timestamps: true,
  },
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();

  this.password = await bcrypt.hash(this.password, salt);

  next();
});

userSchema.methods.login = async function (email: string, password: string) {
  const user = await User.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("Invalid password");
  }
  throw Error("Account does not exist with that email");
};

const User = mongoose.model("user", userSchema);

export default User;
