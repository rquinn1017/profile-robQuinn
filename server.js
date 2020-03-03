// need express to interact with the front end
const express = require("express");
// need path for filename paths
const path = require("path");


// creating an "express" server
const app = express();
// Sets an Initial port for listeners
const PORT = process.env.PORT || 8080;


// Creating express app and configuring middleware needed for authentication

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// If no matching route is found default to home
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });



// Start the server on the port
app.listen(PORT, function() {
    console.log("SERVER IS LISTENING: " + PORT);
  });