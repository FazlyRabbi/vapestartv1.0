import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: [true, "name must be unique"],
    },

    description: {
      type: String,
      trim: true,
    },

    slug: {
      type: String,
      unique: [true, "category must be unique"],
      lowercase: true,
      index: true,
      required: true,
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema,"category");

export default Category;
