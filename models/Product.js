import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required."],
      trim: true,
      unique: [true, "name must be unique"],
      minLength: [3, "name must be 3 charecter"],
      maxLength: [100, "name is too large"],
    },

    imgUrl: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be nagetive"],
    },

    unit: {
      type: String,
      enum: ["kg", "liter", "pcs"],
      default: "pcs",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: [0, "quantity cant be negative"],
      message: "quantity must be an integer.",
    },

    brand: {
      type: String,
      required: true,
    },

    Flavour: [
      {
        type: String,
        trim: true,
      },
    ],

    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
      required: true,
      sparse: true
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
