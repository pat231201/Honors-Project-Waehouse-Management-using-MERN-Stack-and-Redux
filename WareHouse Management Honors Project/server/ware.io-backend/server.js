const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const productRouter = require("./routes/products");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(async function (req, res, next) {
  res.locals.path = req.path;
  next();
});

const port = 5000;
const uri =
  "mongodb+srv://prasannatapkire7:prasanna23@cluster0.guygivp.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connected succesfully");
});

app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
