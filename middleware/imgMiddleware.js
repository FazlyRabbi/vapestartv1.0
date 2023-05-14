import fs from "fs";

export const imgMiddleware = async (req, res, next) => {
  if (req.method === "POST") {
    try {
      if (!req.files) {
        return res.status(400).json({ mesage: "No files were choose" });
      }

      let files = Object.values(req.files).flat();

      for (const file of files) {
        if (
          file.mimetype !== "image/jpeg" &&
          file.mimetype !== "image/png" &&
          file.mimetype !== "image/webp"
        ) {
          removeTmp(file.tempFilePath);
          return res.status(400).json({ mesage: "invalid file format!" });
        }
        if (file.size > 1024 * 1024 * 10) {
          removeTmp(file.tempFilePath);
          return res
            .status(400)
            .json({ mesage: "file size is too large mx 10mb is allowd!" });
        }
      }
      next();
    } catch (err) {
      res.status(500).json({ mesage: err.mesage });
    }
  } else {
    next();
  }
};

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};
