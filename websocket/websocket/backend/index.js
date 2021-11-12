const server = require("ws").Server;
const socket = new server({ port: 3000 }, () =>
    console.log("Websocket Running on port: 3000")
);

socket.on("connection", (ws) => {
    ws.on("message", function (message) {
        console.log("From server: ", message.toString());
        ws.send(message.toString());
    });

    ws.on("close", () => {
        console.log("Connection Lost");
    });
});
