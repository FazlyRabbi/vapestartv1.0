import { createRouter } from "next-connect";
import cloudinary from "cloudinary";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import fs from "fs";
import Product from "models/Product";
import db from "utils/db";

// Configuration
cloudinary.config({
  cloud_name: "deor7xxf1",
  api_key: "913671238687163",
  api_secret: "tWeHrCgkEKBtJ2q9_bDWAK1uapw",
});

// setup config
export const config = {
  api: {
    bodyParser: false,
  },
};

const router = createRouter();

router
  .use(
    fileUpload({
      useTempFiles: true,
    })
  )
  .get(async (req, res) => {
    await db.conectDb();

    try {
      const { id } = req.query;
      const products = await Product.find({
        category: { _id: id },
      }).populate("category");

      // upload product
      res.status(200).json({
        status: "success",
        message: "product inserted successfully!",
        data: products,
      });
    } catch (err) {
      res.status(404).json({ status: "fail", message: err.message });
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.query;

      await cloudinary.v2.uploader.destroy(id);

      const result = await Product.deleteOne({ _id: id });
      res.status(200).json({ ok: true, message: "Image deleted successfully" });
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
