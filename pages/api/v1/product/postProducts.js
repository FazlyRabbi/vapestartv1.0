import db from "utils/db";
import Product from "models/Product";

export default async function postProducts(req, res) {
  if (req.method != "POST") return res.status(400).send("bad request");

  await db.conectDb();

  try {
    // to insert multiples data  to db
    const product = await Product.insertMany(req.body);

    // return data to client
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully!",
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Data not instered!",
      error: err.message,
    });
  }
}
