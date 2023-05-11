import express, {response} from 'express';

const app = express();

let medicines = [
        {
            "id": 1,
            "description" : "СофтЛайф премиум ватные палочки на бумажной основе с добавлением бамбука №100",
            "img" : "../img/medecine/1.jpg",
            "isSpecial": true,
            "tags" : ["Акция", "Для взрослых"]
        },
        {
            "id": 2,
            "description" : "СофтЛайф премиум ватные диски прямоугольные черные №80",
            "img" : "../img/medecine/2.jpg",
            "isSpecial": true,
            "tags" : ["Акция", "Для взрослых"]
        },
        {
            "id": 3,
            "description" : "Будь Здоров! Рыбный жир 75мл",
            "img" : "../img/medecine/3.jpg",
            "isSpecial": false,
            "tags" : ["Для взрослых", "Противопростутдные"]
        },
        {
            "id": 4,
            "description" : "Будь Здоров! Грин фиточай Фитосбор №1 толокнянка ф/п 2г №20",
            "img" : "../img/medecine/4.jpg",
            "isSpecial": false,
            "tags" : ["Для взрослых", "Противопростутдные"]
        },
        {
            "id": 5,
            "description" : "АВС хэлси фуд клетчатка Сибирская стопаппетит 8,5г №14",
            "img" : "../img/medecine/5.jpg",
            "isSpecial": false,
            "tags" : ["Для детей", "Противовирусные"]
        }
    ];

var id = 6;

app.use(express.json());






app.use(express.static("../Client"));




// этот маршрут замещает наш файл
// todos.json в примере из части 5
app.get("/getMedicine", function (req, res) {
    //console.log("Привет мир")
    res.json(medicines);
});

app.post("/todos", function (req, res) {
// сейчас объект сохраняется в req.body
    var newMedicine = req.body;
    console.log(newMedicine);


    medicines.push(
        {
            "id": id++,
            "description": newMedicine.description,
            "img" : newMedicine.img,
            "isSpecial": newMedicine.isSpecial,
            "tags": []
        }
    )
    console.log(id);

// отправляем простой объект
    res.json({"message":"Вы размещаетесь на сервере!", "id": id});
});


app.listen(3000, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
});
