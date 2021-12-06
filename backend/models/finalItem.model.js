const mongoose = require("../connection");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const finalItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("FinalItem", finalItemSchema);
