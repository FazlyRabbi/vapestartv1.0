import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    slug: { type: String, unique: true, lowercase: true, index: true },

    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },

    product: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default Cart;
