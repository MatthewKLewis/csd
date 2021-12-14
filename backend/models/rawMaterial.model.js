const mongoose = require("../connection");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const rawMaterialSchema = new Schema({
  createdOn: Date,
  name: String,
  description: String,
  level: Number,
  type: String,
  discipline: String,
  owner: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("RawMaterial", rawMaterialSchema);
