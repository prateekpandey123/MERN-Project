const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// Home part
const home = async (req, res) => {
  try {
    res.status(200).send("welcom to the revision with controllers");
  } catch (error) {
    console.log(error);
  }
};

// Registration part
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    // console.log(req.body);

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "email already exist" });
    }

    // has the password
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, 10);

    const data = await User.create({
      username,
      email,
      phone,
      password,
      // password: hash_password,
    });
    // const userExist = res.status(200).json({ data });
    res.status(201).json({
      msg: data,
      token: await data.generateToken(),
      userId: data._id.toString(),
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    // res.status(500).json("Internal server error");
    next(error);
  }
};

// login part
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credential" });
    }

    // const user = await bcrypt.compare(password, userExist.password);

    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login successfully",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("internal server error");
  }
};

// to send user data user logic

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};
module.exports = { user, home, register, login };
