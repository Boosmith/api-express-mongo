const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/shop";

mongoose.connect(url, err => {
  if (err) {
    console.log("Error in connection");
    throw err;
  } else {
    console.log("connected");
  }
});

module.exports.db = mongoose;