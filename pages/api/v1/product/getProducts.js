import db from "utils/db";
import Product from "models/Product";

export default async function getProducts(req, res) {
  if (req.method != "GET") return res.status(400).send("bad request!");

  await db.conectDb();

  try {
    // filter form database
    const filter = { name: "helos" };
    // product updated but not back response
    const products = await Product.find().populate("user", "-_id");

    // return data to client
    res.status(200).send({
      status: "success",
      message: "Data inserted successfully!",
      data: products,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Data not instered!",
      error: err.message,
    });
  }
}
