const controllers = {};

controllers.register = function (req, res, next) {
  try {
    res.json({
      data: {},
      success: true,
      message: "Register successful",
    });
  } catch (e) {
    next({ message: e, status: 400 });
  }
};

controllers.login = function (req, res, next) {
  try {
    res.json({
      data: {},
      success: true,
      message: "Login successful",
    });
  } catch (e) {
    next({ message: e, status: 400 });
  }
};

module.exports = controllers;
