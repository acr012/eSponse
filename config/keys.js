// Determine what set of credentials to return
if (process.env.NODE_ENV === 'production'){
  //export production keys
  module.exports = require('./prod');
} else{
  // export dev keys
  module.exports = require('./dev');
}
