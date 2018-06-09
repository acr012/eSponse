const mongoose = require('mongoose');
const {Schema} = mongoose;  // const Schema = mongoose.Schema;

// freely add or remove schema members
const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});
// mongoose creates a new collection called users
// this will not overwrite existsing collections
mongoose.model('users', userSchema);
