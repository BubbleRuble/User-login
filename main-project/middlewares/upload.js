const multer = require('multer');
const path = require('path');
const fs = require('fs/promises');
const { nanoid } = require('nanoid');

const tempDir = path.join(__dirname, "../", "temp");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, originalname)
  }
});

const upload = multer({
  storage: multerConfig,
});

const booksDir = path.join(__dirname, "public" , "books");

module.exports = upload;