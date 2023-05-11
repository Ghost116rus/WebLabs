var express = require("express"),
    http = require("http"),
    app = express(),
    toDos = [
// настраиваем список задач копированием
// содержимого из файла todos.OLD.json
    ];
app.use(express.static("../Client"));
http.createServer(app).listen(3000);

// этот маршрут замещает наш файл
// todos.json в примере из части 5
app.get("/check", function (req, res) {
    console.log("Привет мир")
    res.json("Привет мир");
});
