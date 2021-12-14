const mongoose = require("../connection");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const componentItemSchema = new Schema({
  createdOn: Date,
  name: String,
  description: String,
  level: Number,
  type: String,
  discipline: String,
  blueprint: Schema.Types.Mixed,
  owner: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("ComponentItem", componentItemSchema);
