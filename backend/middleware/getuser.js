//middleware for fetching logged in user details
const jwt = require("jsonwebtoken");
const SECRET_KEY = "shhhhh";

const getuser = (req, res, next) => {
  // Get the user from the jwt token and add id to req object
  const usertoken = req.header("auth-token");
  if (!usertoken) {
    res.status(401).send({ error: "Invalid Token" });
  }
  try {
    const data = jwt.verify(usertoken, SECRET_KEY);
    req.user = data.user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ error: "error" });
  }
};

module.exports = getuser;
