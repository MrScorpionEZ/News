const express = require("express");

const app = express();
const port = 2000;

app.set("view engine", "hbs");

app.listen(port, () => {
console.log(`App is running on http://localhost:${port}/`);
});

app.get("/", (request, response) => {
response.render("index");
});

app.get("/*", (request, response) => {
response.redirect("/");
}); 