const express = require("express");
const { connection } = require("./config/db");
const { LoginRouter } = require("./route/login.route");
const { ProductRouter } = require("./route/product.route");
const { SignupRouter } = require("./route/signup.route");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

app.use("/",SignupRouter)
app.use("/",LoginRouter)
app.use("/",ProductRouter)

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`connected to  ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
