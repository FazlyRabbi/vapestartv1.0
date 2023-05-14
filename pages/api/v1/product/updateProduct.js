import db from "utils/db";
import Product from "models/Product";

export default async function updateProduct(req, res) {
  if (req.method != "PUT") return res.status(400).send("bad request!");

  await db.conectDb();

  try {
    // filter form database
    const filter = { _id: req.query.id };

    // product updated but not back response
    // const updatedProduct = await Product.updateOne(filter, {
    //   $set: req.body
    // });

    //  to set relationes
    // const updatedProduct = await Product.updateOne(filter, {
    //   $push: req.body
    // });

    // product updated but not back response
    const updatedProduct = await Product.findByIdAndUpdate(
      filter,
      {
        $set: req.body,
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );

    // return data to client
    res.status(200).send({
      status: "success",
      message: "Data inserted successfully!",
      data: updatedProduct,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Data not instered!",
      error: err.message,
    });
  }
}
