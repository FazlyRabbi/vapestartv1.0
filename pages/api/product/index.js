import { createRouter } from "next-connect";
import cloudinary from "cloudinary";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import fs from "fs";
import { imgMiddleware } from "middleware/imgMiddleware";
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
  .use(imgMiddleware)
  .get(async (req, res) => {
    await db.conectDb();

    try {
      const products = await Product.find({}).populate("category");

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
  .post(async (req, res) => {
    await db.conectDb();

    let images = [];

    try {
      let files = Object.values(req.files).flat();

      for (const file of files) {
        const result = await uploadToCloudinary(file.tempFilePath);
        images.push(result);
      }

      const product = await Product({
        ...req.body,
        category: req.body.category,
        imgUrl: images[0].url,
      });

      const result = await product.save();

      // upload product
      res.status(200).json({
        status: "success",
        message: "product inserted successfully!",
        data: result,
      });
    } catch (err) {
      await cloudinary.v2.uploader.destroy(images[0].public_url);
      res.status(500).json({ status: "fail", message: err.message });
    }
  })
  .delete(async (req, res) => {
    try {
      const { public_id } = req.body;

      const result = await cloudinary.v2.uploader.destroy(public_id);
      console.log(result);
      res.status(200).json({ message: "Image deleted successfully" });
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

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

export const uploadToCloudinary = (file) => {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(
      file,
      { folder: "products" },
      (error, result) => {
        if (error) {
          removeTmp(file.tempFilePath);
          reject(error);
          console.log("error");
        } else {
          resolve({
            url: result.secure_url,
            public_url: result.public_id,
          });
        }
      }
    );
  });
};
