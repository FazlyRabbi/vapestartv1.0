import { createRouter } from "next-connect";
import bcrypt from "bcrypt";
import db from "utils/db";
import User from "models/User";
import createActivationToken from "utils/token";
import { sendMailToken } from "utils/sendEmailToken";

const router = createRouter();

router.post(async (req, res) => {
  await db.conectDb();

  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send("please fill all fills!");
    }

    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({ message: "user is already exit!" });
    }

    const cryptedPassword = await bcrypt.hash(password, 12);

    const newUser = await User({ name, email, password: cryptedPassword });

    const addedUser = await newUser.save();

    const activation_token = createActivationToken({
      id: addedUser._id.toString(),
    });

    const url = `${process.env.BASE_URL}/activate/${activation_token}`;

    // sendMailToken(email, "activation token", url);

    // await db.disconnectDb();

    res.status(200).json({
      ok: true,
      message: "Registration Successfull!",
      data: addedUser,
    });
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
});

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
