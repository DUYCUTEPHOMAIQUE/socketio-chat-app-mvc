const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require("node:http");
const { env } = require("node:process");
const { join } = require("node:path");
const { connection } = require("./src/service/chat.service");
const ChatService = require("./src/service/chat.service");

const app = express();
const server = createServer(app);
const io = new Server(server);
//su dung global
global.__basedir = __dirname;
global.__io = io;

app.use(require("./src/routes/chat.route"));
__io.on("connection", ChatService.connection);

const port = process.env.PORT || 3005;

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
