import { Server } from "socket.io";

import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;
const io = new Server(PORT, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("mouse", (data) => {
    socket.broadcast.emit("mouse", {
      id: socket.id,
      x: data.x,
      y: data.y,
    });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    io.emit("remove", socket.id);
  });
});
