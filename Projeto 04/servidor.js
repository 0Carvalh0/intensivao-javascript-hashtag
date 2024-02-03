const http = require("http");
const express = require("express");
const aplication = express();

const servidorHttp = http.createServer(aplication);
const io = require("socket.io")(servidorHttp);

io.addListener("connection", () => {
  console.log("Um usuario se conectou!");
});

aplication.use(express.static("public"));

servidorHttp.listen(1000);
