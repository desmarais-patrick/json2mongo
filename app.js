var mongoose = require("mongoose");

var config = require("./config.js");

var db = mongoose.createConnection(config.host, config.dbname, config.port);

db.on("error", function (err) {
  console.error("Connection error", err);
  process.exit(1);
});
db.once("open", onConnection);

function onConnection() {
  console.log("Next: Define Object model using Mongoose");

  mongoose.disconnect(function () {
    console.log("Exiting now!");
    process.exit(0);
  });
}

