const express = require("express");
const { connection } = require("./config/db");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();


app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`connected to  ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
