module.exports = {
  scripts: {
    default: "",
    server: "nodemon src/server",
    test: "mocha --reporter spec tests/unit/*.test.js"
  }
};