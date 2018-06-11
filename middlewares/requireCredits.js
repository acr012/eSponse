module.exports = (req, res, next) => {
  //Check if user is logged inspect
  if(req.user.credits < 1) {
    return res.status(403).send({ error: 'Not enough credits!'})
  }
  //Continue to request handler
  next();
};
