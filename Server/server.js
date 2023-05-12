import express, {response} from 'express';
import mongoose from 'mongoose';
import {MedicineController} from './controllers/index.js'
import {removeTag} from "./controllers/MedicineController.js";

mongoose
    .connect('mongodb://127.0.0.1/WebLabs')
    .then(() => {   console.log('DB ok')})
    .catch((err) => {console.log('DB error', err)});

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

app.use(express.json());

app.use(express.static("../Client"));


app.get("/getAll", MedicineController.getAll);
app.get("/getById", MedicineController.getOneById);
app.get("/tags", MedicineController.getAllTags);

app.post("/createNewMedicine", MedicineController.create)
app.post("/createNewTag", MedicineController.createTag)

app.patch('/updateMedicine', MedicineController.update);
app.delete('/deleteMedicine', MedicineController.remove);
app.delete('/deleteTag', MedicineController.removeTag);


app.listen(3000, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
});
