import { createRouter } from "next-connect";
import db from "utils/db";
import Cart from "models/Cart";
import bodyParser from "body-parser";

const router = createRouter();

router
  .get(async (req, res) => {
    try {
      await db.conectDb();
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

      const { data } = req.body;

      const cart = await Cart.updateOne({ _id: id }, { $set: { items: data } });

      if (cart) {
        res.status(200).send({
          ok: true,
          message: "Cart updated successfully!",
          data: cart,
        });
      } else {
        res.status(500).json({
          ok: false,
          message: "Cart update fail!",
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
