import { createRouter } from "next-connect";
import db from "utils/db";
import Cart from "models/Cart";
import Product from "models/Product";
import bodyParser from "body-parser";

const router = createRouter();

router
  .get(async (req, res) => {
    await db.conectDb();

    try {
      const { id } = req.query;

      // Find the user's cart
      const cart = await Cart.findOne({ user: id }).populate("items.product");

      if (cart) {
        res.status(200).send({
          status: "success",
          message: "Cart found successfully!",
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
  })
  .put(async (req, res) => {
    await db.conectDb();

    try {
      const { id } = req.query;

      const { updatedItem } = req.body;

      // Find the user's cart
      const cart = await Cart.findOneAndUpdate(
        { _id: id, "items._id": updatedItem._id },
        { $set: { "items.$": updatedItem } },
        { new: true }
      ).populate("items.product");

      if (cart) {
        res.status(200).send({
          status: "success",
          message: "Cart updated successfully!",
          data: cart,
        });
      } else {
        res.status(500).json({
          status: "fail",
          message: "Cart update failed!",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: "fail",
        message: "Data not inserted!",
        error: err.message,
      });
    }
  })
  .delete(async (req, res) => {
    await db.conectDb();

    try {
      const { id } = req.query;

      // Find the user's cart
      const cart = await Cart.findByIdAndDelete(id);

      if (cart) {
        res.status(200).send({
          status: "success",
          message: "Cart Delete successfully!",
          data: cart,
        });
      } else {
        res.status(500).json({
          status: "fail",
          message: "Cart Fail to Delete!",
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
