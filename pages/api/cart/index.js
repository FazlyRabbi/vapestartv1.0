import { createRouter } from "next-connect";
import db from "utils/db";
import Cart from "models/Cart";
import Product from "models/Product";
import bodyParser from "body-parser";

const router = createRouter();

router
  .post(async (req, res) => {
    await db.conectDb();
    const { user, product, quantity, flavour } = req.body;
    try {
      //  Find the user's cart
      let cart = await Cart.findOne({ user });

      if (!cart) {
        // If the user's cart doesn't exist, create a new one
        cart = await Cart({
          user,
          items: [],
        });
      }

      // Check if the product is already in the cart
      const existingItem = cart.items.find(
        (item) => item.product.toString() === product
      );

      if (existingItem) {
        // If the product exists in the cart, update its quantity
        existingItem.quantity += Number(quantity);
      } else {
        // If the product doesn't exist in the cart, add it as a new item
        cart.items.push({
          product,
          quantity,
          flavour,
        });
      }

      // Save the updated cart
      await cart.save();

      res.status(200).json({
        ok: true,
        message: "cart created successfully!",
        data: cart,
      });
    } catch (err) {
      res.status(500).json({
        ok: false,
        message: "Data not instered!",
        error: err.message,
      });
    }
  })
  .get(async (req, res) => {
    await db.conectDb();

    try {
      const { user } = req.query;
      // Find the user's cart
      const cart = await Cart.findOne({ user }).populate("items.product");

      if (cart) {
        res.status(200).send({
          ok: true,
          message: "Cart found successfully!",
          data: cart,
        });
      } else {
        res.status(500).json({
          ok: false,
          message: "Cart Not Found!",
        });
      }
      // return data to client
    } catch (err) {
      res.status(500).json({
        ok: false,
        message: "Data not instered!",
        error: err.message,
      });
    }
  })
  .put(async (req, res) => {
    await db.conectDb();

    try {

      const [updatedItem] = req.body;

      const cart = await Cart.findOneAndUpdate(
        { user: id },
        { $set: { "items.$": updatedItem } },
        { new: true }
      ).populate("items.product");

      if (cart) {
        res.status(200).send({
          ok: true,
          message: "Cart found successfully!",
          data: cart,
        });
      } else {
        res.status(500).json({
          ok: false,
          message: "Cart Not Found!",
        });
      }
      // return data to client
    } catch (err) {
      res.status(500).json({
        ok: false,
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
