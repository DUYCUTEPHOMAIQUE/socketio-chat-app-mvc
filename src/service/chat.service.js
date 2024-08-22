class ChatService {
  //connection

  connection(socket) {
    console.log(`user connected with id ${socket.id}`);
    socket.on("disconnect", () => {
      console.log(`user disconnected`);
    });

    //event
    socket.on("chat message", (msg) => {
      console.log(`msg:::${msg}`);
      global.__io.emit("chat message", msg);
    });
  }
}

module.exports = new ChatService();
