import { createRouter } from "next-connect";
import db from "utils/db";
import Order from "models/Order";

const router = createRouter();

router
  .post(async (req, res) => {
    await db.conectDb();

    try {
      const { userId, orderId, items } = req.body;

      // Create a new order
      let order = await Order({
        orderId,
        userId,
        items,
      });

      await order.save();

      res.status(200).json({
        ok: true,
        message: "cart created successfully!",
        data: order,
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
      const orders = await Order.find().populate("items.productId");

      if (orders) {
        res.status(200).send({
          status: "success",
          message: "Order Found successfully!",
          data: orders,
        });
      } else {
        res.status(500).json({
          status: "fail",
          message: "Order Not Found!",
        });
      }
      // return data to client
    } catch (err) {
      res.status(500).json({
        status: "fail",
        message: "Server Error",
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
