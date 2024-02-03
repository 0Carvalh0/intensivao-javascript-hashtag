const http = require("http");
const express = require("express");
const aplication = express();

const servidorHttp = http.createServer(aplication);
const io = require("socket.io")(servidorHttp);

io.addListener("connection", (socket) => {
  console.log("Um usuario se conectou!");
  socket.addListener("new message", (msg) => {
    io.emit("new message", msg);
  });
});

aplication.use(express.static("public"));

servidorHttp.listen(1000, "192.168.68.107");
