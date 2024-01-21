const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 3000;

const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(express.static('public'));

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ filename: req.file.originalname });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
