const multer = require("multer");
const cloudinary = require("./cloudinary");

const {
  CloudinaryStorage,
} = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "circuitserve-documents",
    resource_type: "auto",
  },
});

module.exports = multer({
  storage,
});