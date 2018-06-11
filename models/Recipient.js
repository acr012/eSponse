const mongoose = require('mongoose');
const { Schema } = mongoose;

//Subdocument collection of survey
const recipientSchema = new Schema ({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;
