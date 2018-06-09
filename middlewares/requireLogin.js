module.exports = (req, res, next) => {
  //Check if user is logged inspect
  if(!req.user) {
    return res.status(40).send({ error: 'You must be signed in!'})
  }
  //Continue to request handler
  next();
};
