const express = require('express');
const router = express.Router();
const path = require('path');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const Upfile = require('../models/upfiles');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.post('/api/fileanalyse', upload.single('upfile'), async (req, res) => {
  const fileUpload = new Upfile ({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
  await fileUpload.save((err,data) => {
    if (err) {
      res.send('There was an error: ', err);
    }
    else {
      res.json({
        "name": data.name,
        "type": data.type,
        "size": data.size       
      });
    }
  });
});

module.exports = router;