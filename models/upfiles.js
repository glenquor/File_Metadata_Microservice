const mongoose = require('mongoose');
const { Schema } = mongoose;
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

mongoose.connect(process.env.MONGO_URI);

let upfileSchema = new Schema ({
  name: String,
  type: String,
  size: Number
});

module.exports = mongoose.model('upfiles', upfileSchema);