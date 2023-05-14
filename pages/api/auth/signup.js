import { createRouter } from "next-connect";
import bcrypt from "bcrypt";
import db from "utils/db";
import User from "models/User";
import createActivationToken from "utils/token";
import { sendMailToken } from "utils/sendEmailToken";

const router = createRouter();

router
  .get(async (req, res) => {
    await db.conectDb();

    try {
      const user = await User.findOne(req.body);

      res.status(200).json({
        status: "success",
        message: "user find successfully!",
        data: user,
      });
    } catch (err) {
      res.status(500).json({ status: "fail", message: err.message });
    }
  })
  .post(async (req, res) => {
    await db.conectDb();

    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).send("please fill all fills!");
      }

      const user = await User.findOne(req.body);

      if (user) {
        return res.status(400).message({ message: "user is already exit!" });
      }

      const cryptedPassword = await bcrypt.hash(password, 12);

      const newUser = await User({ name, email, password: cryptedPassword });

      const addedUser = await newUser.save();

      const activation_token = createActivationToken({
        id: addedUser._id.toString(),
      });

      const url = `${process.env.BASE_URL}/activate/${activation_token}`;

      sendMailToken(email, "activation token", url);

      await db.disconnectDb();
      
      res.status(200).json({
        status: "success",
        message: "user created successfully!",
        data: addedUser,
      });
    } catch (err) {
      res.status(500).json({ status: "fail", message: err.message });
    }
  });

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
