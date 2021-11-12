const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: "*",
});

io.on("connection", (socket) => {
    console.log("What is socket", socket);
    console.log("Socket is active to be connected");

    socket.on("chat", (payload) => {
        console.log("What is client", payload);
        io.emit("chat", payload);
    });
});

server.listen(3000, () => {
    console.log("Server is listing at port 3000");
});
