import { createRouter } from "next-connect";
import db from "utils/db";
import Cart from "models/Cart";
import Product from "models/Product";

const router = createRouter();

router
  .post(async (req, res) => {
    await db.conectDb();
    const { userId, productId, quantity } = req.body;

    try {
      //  Find the user's cart
      let cart = await Cart.findOne({ user: userId });

      if (!cart) {
        // If the user's cart doesn't exist, create a new one
        cart = await Cart({
          user: userId,
          items: [],
        });
      }

      // Check if the product is already in the cart
      const existingItem = cart.items.find(
        (item) => item.product.toString() === productId
      );

      if (existingItem) {
        // If the product exists in the cart, update its quantity
        existingItem.quantity += quantity;
      } else {
        // If the product doesn't exist in the cart, add it as a new item
        cart.items.push({
          product: productId,
          quantity: quantity,
        });
      }

      // Save the updated cart
      await cart.save();

      res.status(200).json({
        status: "success",
        message: "cart created successfully!",
        data: cart,
      });
    } catch (err) {
      res.status(500).json({
        status: "fail",
        message: "Data not instered!",
        error: err.message,
      });
    }
  })
  .get(async (req, res) => {
    await db.conectDb();
    try {
      const { userId } = req.body;
      // Find the user's cart
      const cart = await Cart.findOne({ user: userId }).populate(
        "items.product"
      );

      if (cart) {
        res.status(200).send({
          status: "success",
          message: "Product inserted successfully!",
          data: cart,
        });
      } else {
        res.status(500).json({
          status: "fail",
          message: "Cart Not Found!",
        });
      }
      // return data to client
    } catch (err) {
      res.status(500).json({
        status: "fail",
        message: "Data not instered!",
        error: err.message,
      });
    }
  });

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
