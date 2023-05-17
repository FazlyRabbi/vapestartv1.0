import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name."],
      trim: true,
      unique: [true, "Name is already in used!"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email address."],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your a password."],
      trim: true,
      unique: true,
    },
    role: {
      type: String,
      default: "user",
    },
    image: {
      type: String,
      default: "link",
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    defaultPaymentMethod: {
      type: String,
      default: "",
    },
    address: [
      {
        firstName: {
          type: "String",
        },
        city: {
          type: "String",
        },
        country: {
          type: "String",
        },
      },
    ],
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
