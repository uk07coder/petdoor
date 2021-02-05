exports.requireSignin = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, process.env.TOKEN_KEY);
  req.user = user;
  next();
};
