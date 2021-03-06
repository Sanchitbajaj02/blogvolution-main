const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

const port = process.env.PORT || 3000;
const host = "localhost";

// middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Calling database and authenticate
const db = require("./database/db");
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MYSQL database connected");
});
const tokenMiddleware = require("./middleware/token");

// api route
const apiRouter = require("./routes/api");
// app.use("/apis", apiRouter);
app.use("/server/apis", apiRouter);

// blogs route
const blogRouter = require("./routes/blog");
app.use("/server/blogs", blogRouter);

// users route
const userRouter = require("./routes/user");
app.use("/server/users", userRouter);

// verify;
app.get("/test", tokenMiddleware.jwtVerification, (req, res) => {
  console.log("User Testing");
  res.send("Success");
});

// root route
app.use("*", (req, res) => {
  res.status(200);
  res.send({
    message: "this is the root route",
  });
});

app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
