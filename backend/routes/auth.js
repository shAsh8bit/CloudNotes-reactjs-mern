const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const getuser = require("../middleware/getuser")
const SECRET_KEY='shhhhh';


//Create User
router.post(
  "/createUser", //"localhost/api/auth/createUser
  [
    //setting requirements for each element and returning message if requirements doesnt meet
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "set Password of atleast 8 characters").isLength({
      min: 8,
    }),
  ],

  //returning 400 bad request and error if there is any error
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //check for same email in database
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "user with this email already exists" });
      }

      //bcryptjs
      const salt = await bcrypt.genSalt(10);
      const secPassword = await bcrypt.hash(req.body.password, salt);

      //creating a user
      user = await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
      });
      //JWT
      const data = {
        
        user: {
          id: user.id
        }
      }
      
      
      const token = jwt.sign(data, SECRET_KEY);

      //showing token in Thunderclient
      res.json({token});
      
    } catch (error) {
      //catching other errors
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
 
);
module.exports = router; //end create user


 //Login
router.post(
  "/login", //localhost:5000/api/auth/login
  [
    //setting requirements for login
    body("email", "Enter a valid email").isEmail(),
    body("password", "set Password of atleast 8 characters").isLength({
      min: 8,
    }),
  ],
 
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const password = req.body.password;
    try {
     
      let user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).json({ error: "Please Enter Correct Email" });
      }

      //comparing password for bcrypt matching
      const passwordCompare= await bcrypt.compare(password,user.password)
      if(!passwordCompare){
        return res.status(400).json({ error: "Please Enter Correct Password" });
      }

      //JWT
      const data = {
      
        user: {
          id: user.id
        }}
      
      const token = jwt.sign(data, SECRET_KEY);
      res.json({token})
      
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  
  
  }
);

module.exports = router; //end user login


//get loggedin user details
//localhost:5000/api/auth/getuser
router.post( "/getuser",getuser, 
 async (req, res) => {
  try {
    const userId = req.user.id;
    console.log(userId)
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
    
    }
    );

module.exports = router;
 
