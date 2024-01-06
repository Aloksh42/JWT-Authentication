const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    requires: true,
  },
});

module.exports = mongoose.model("Auth", AuthSchema);
