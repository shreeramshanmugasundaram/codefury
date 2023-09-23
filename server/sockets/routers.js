const sockets = (socket) => {
  console.log("connected");
  socket.on("send-message", (data) => {
    let skt = socket.broadcast;
    skt = data.roomId ? skt.to(data.roomId) : skt;
    skt.emit("message-from-server", data);
  });

  socket.on("join-room", ({ roomId }) => {
    console.log("Joining Room", roomId);
    socket.join(roomId);
  });
};

export default sockets;
