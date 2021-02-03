const express = require("express");
const fs = require("fs");

const app = express();
const port = 2000;

app.set("view engine", "hbs");

app.listen(port, () => {
   console.log(`App is running on http://localhost:${port}/`);
});

app.get("/", (request, response) => {
   const file = fs.readFileSync("./data/notes.json");

   const model = JSON.parse(file);
   response.render("index", model);
});

app.get("/*", (request, response) => {
response.redirect("/");
});