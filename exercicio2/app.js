import express from "express";
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("pages/index");
})
app.get("/404", (req, res) => {
    res.render("pages/404");
})
app.listen(3000, () => {
    console.log("Servidor expressJS rodando!");
})
