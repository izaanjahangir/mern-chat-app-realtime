const express = require("express");
const app = express();

const globalHelpers = require("./utils/globalHelpers");
const keys = require("./config/keys");

// Global error handler
app.use((err, req, res, next) => {
  const error = globalHelpers.handleMongooseError(err.message);

  if (
    process.env.NODE_ENV === "production" &&
    typeof error.message === "string" &&
    error.message.startsWith("request to http")
  ) {
    return res
      .status(500)
      .json({ message: "Internal server error", status: "failed" });
  }

  res.status(err.status || 400).json({ ...error, status: "failed" });
});

app.listen(keys.PORT, () =>
  console.log("Server is running on PORT ", keys.PORT)
);
