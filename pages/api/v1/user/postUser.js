import db from "utils/db";
import User from "models/User";

export default async function postProducts(req, res) {
  if (req.method != "POST") return res.status(400).send("bad request.");

  await db.conectDb();

  const user = new User(req.body);

  try {
    // post product to db
    // save data to mognoose
    const result = await user.save();
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
}
