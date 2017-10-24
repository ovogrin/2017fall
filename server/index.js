const express = require("express");
const handler = require("./httpHandler")
const gameController = require("./gameController");

const server = express();

server.use("/client", express.static("./jquery-mockup"));
server.use("/old", handler.main);
server.use("/game", gameController.router);

server.listen(3000);

console.log("running http://localhost:3000");