const express = require("express");
const app = express();
const path = require("path");

//Settings

app.set("port", process.env.port || 3000);
app.use(express.static(path.join(__dirname,"src")));

//Middlewares



//Start server

app.listen(app.get("port"), () => {
    console.log("Listen in port "+app.get("port"));
});

//Sockets

