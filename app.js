const express = require("express");
const app = express();
// const PORT = 3000;


// APPLICATION CONFIG
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


// ROUTES
app.get("/", (req, res) => res.render("home"))





// APPLICATION INITIATION
app.listen(3000, () => {
	console.log("Me 1 Server Started on: https://localhost:3000" )
})