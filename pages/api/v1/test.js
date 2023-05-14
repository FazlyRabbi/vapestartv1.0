// import db from "../../../utils/db";
// import Product from "models/Model.Product";

export default async function getProducts(req, res) {
  res.status(200).send("hello");

  // db.conectDb();
  // try {

  //   if (req.method != "GET") return res.status(400);

  //   const products = await Product.find();

  //   console.log(products);

  //   // send back the client secret
  //   res.status(200).send({
  //     message: "success",
  //     products,
  //   });

  // } catch (err) {
  //   res.status(500).json({ message: "Internal server error" });
  // }
}
