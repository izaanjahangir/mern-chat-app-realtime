const express = require("express");
const app = express();

const keys = require("./config/keys");

app.listen(keys.PORT, () =>
  console.log("Server is running on PORT ", keys.PORT)
);
