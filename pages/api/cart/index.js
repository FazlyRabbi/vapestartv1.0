import { createRouter } from "next-connect";
import db from "utils/db";
import Cart from "models/Cart";

import Product from "models/Product";

const router = createRouter();

router

  .post(async (req, res) => {
    await db.conectDb();

    try {
      const cart = await Cart({
        ...req.body,
        user: req.query.user_id,
        product: req.query.product,
      });

      const result = await cart.save();

      // const ress = await Cart.updateOne(
      //   { _id: result._id },
      //   {
      //     $push: {
      //       products: req.query.product,
      //     },
      //   }
      // );

      // // post cart to db
      // return data to client
      res.status(200).json({
        status: "success",
        message: "cart created successfully!",
        data: result,
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
      // product updated but not back response
      const carts = await Cart.find({
        user: "645b0cf4ee42fbb95a476461",
      }).populate("product");

      // return data to client
      res.status(200).send({
        status: "success",
        message: "Data inserted successfully!",
        data: carts,
      });
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
