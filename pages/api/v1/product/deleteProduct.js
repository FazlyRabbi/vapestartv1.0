import db from "utils/db";
import Product from "models/Product";

export default async function getProducts(req, res) {
  if (req.method != "DELETE") return res.status(400).send("bad request!");

  await db.conectDb();

  try {
    // filter form database
    const filter = { _id: req.query.id };

    // product updated but not back response
    const products = await Product.deleteOne(filter);

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
