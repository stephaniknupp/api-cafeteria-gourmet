const mongoose = require("mongoose");

const cafeCardSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  imgUrl: {
    required: true,
    type: String,
  },
  stock: {
    required: true,
    type: Number,
  },
  price: {
    required: true,
    type: Number,
  },
  isFavorite: {
    required: true,
    type: Boolean,
  },
});

module.exports = mongoose.model("Cafe", cafeCardSchema);
