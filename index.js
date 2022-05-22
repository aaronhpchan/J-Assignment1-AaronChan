//import required modules
const express = require("express");
const path = require("path");

//set up Express objects
const app = express();
const port = process.env.PORT || "3000";

//set up paths to folders and files
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//serve static files
app.use(express.static(path.join(__dirname, "public")));

//set up page routes
app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});
app.get("/menu", (req, res) => {
    res.render("menu", { title: "Menu" });
});
app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});
app.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact" });
});
app.get("/order", (req, res) => {
    res.render("order", { title: "Order" });
});

//set up server listening
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});



