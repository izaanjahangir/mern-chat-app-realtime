const mongoose = require("mongoose");

const globalHelpers = {};

globalHelpers.handleMongooseError = function (response) {
  let returnResponse = {};

  if (response.name === "ValidationError") {
    const errorsArray = [];
    for (const item in response.errors) {
      if (response.errors.hasOwnProperty(item)) {
        errorsArray.push(response.errors[`${item}`].message);
      }
    }

    returnResponse.message = errorsArray;
  } else if ("message" in response) {
    returnResponse = { message: response.message };
  } else if (Array.isArray(response)) {
    returnResponse.message = response[0];
  }

  return returnResponse;
};

globalHelpers.isValidObjectId = function (id) {
  return mongoose.Types.ObjectId.isValid(id);
};

globalHelpers.isNullOrUndefined = function (value) {
  return typeof value === "undefined" || value === null;
};

globalHelpers.toObjectId = function (id) {
  return new mongoose.Types.ObjectId(id);
};

globalHelpers.deepClone = function (payload) {
  return JSON.parse(JSON.stringify(payload));
};

globalHelpers.isObject = function (data) {
  return data && typeof data === "object";
};

module.exports = globalHelpers;
