/*Common Js */
//const --- constant variable, use whenever possible
var http = require("express");
var handler = require("./httpHandler.js");
var server = http();
server.use("/json", function (req, res, next) {
    res.send({ happy: "Yom Kuppur" });
    next();
});
server.use("/old", handler.main);
server.listen(3000);
console.log("http://localhost:3000");
