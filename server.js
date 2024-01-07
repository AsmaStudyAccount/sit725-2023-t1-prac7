var express = require("express");
var http = require("http"); // Required for integrating socket.io
var app = express();
var server = http.createServer(app); // Create HTTP server with Express
var io = require("socket.io")(server); // Integrate socket.io with the server

var cardsController = require("./controllers/cardsControllers");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Delegate the route handling to the controller
app.get("/api/cards", cardsController.getCardData);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/chat", function (req, res) {
  res.sendFile(__dirname + "/views/chat.html");
});

// Socket.io connection handler
io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle chat event
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

var port = process.env.port || 3000;
server.listen(port, () => {
  // Use server.listen instead of app.listen
  console.log("App listening to: " + port);
});

module.exports = app;
