const mongoose = require("mongoose");

// const URI = "mongodb://localhost:27017/mern_admin";
const URI = process.env.MONGODB_URI;

// mongoose.connect(URI);

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection successful to DB");
  } catch (error) {
    console.log("database connection failed");
    process.exit(0);
  }
};

module.exports = connectDB;
