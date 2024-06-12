require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoute = require("./router/auth-router");

const contactRoute = require("./router/contact-router");

const serviceRoute = require("./router/service-router");

const app = express();

const connectDB = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

// const corsOptions = {
//   origin: "http://localhost:5173/",
//   methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
//   credential: true,
// };

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoute);

app.use("/api/form", contactRoute);

app.use("/api/data", serviceRoute);

// app.get("/", (req, res) => {
//   res.status(200).send("Welcom to the revision part");
// });

app.use(errorMiddleware);

const PORT = 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at Port: ${PORT}`);
  });
});
