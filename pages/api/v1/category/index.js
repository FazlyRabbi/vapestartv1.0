import { createRouter } from "next-connect";

import db from "utils/db";

import Category from "models/Category";

const router = createRouter();

router.post(async (req, res) => {
  await db.conectDb();

  const category = new Category(req.body);

  try {
    // post category to db
    const result = await category.save();
    // return data to client
    res.status(200).json({
      status: "success",
      message: "category created successfully!",
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
