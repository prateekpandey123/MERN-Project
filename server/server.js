require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");

// admin define
const adminRoute = require("./router/admin-router");

const app = express();

const connectDB = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

// lets define admin route
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

const PORT = 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at Port: ${PORT}`);
  });
});
