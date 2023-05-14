import { createRouter } from "next-connect";

import db from "utils/db";
import Product from "models/Product";

const router = createRouter();

router.post(async (req, res) => {

  await db.conectDb();

  const product = new Product({ ...req.body, user: req.query.id });

  try {
    // post product to db
    const result = await product.save();
    // return data to client
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully!",
      data: result,
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
