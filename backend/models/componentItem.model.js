const mongoose = require("../connection");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const blueprintSchema = new Schema({
  name: String,
  level: Number,
  recipe: [{
    _id: Schema.Types.ObjectId,
    count: Number,
  }]
});

const componentItemSchema = new Schema({
  createdOn: Date,
  name: String,
  description: String,
  level: Number,
  type: String,
  discipline: String,
  blueprint: blueprintSchema,
  owner: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("ComponentItem", componentItemSchema);
