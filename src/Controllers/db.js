const mongoose = require("mongoose");
const dotenv = require('dotenv');
function MongoDb(connectiionString) {
  return mongoose.connect(connectiionString);
}
module.exports = MongoDb;