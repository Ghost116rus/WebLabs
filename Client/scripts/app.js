class Medicine{
    description;
    imageSrc;
    tags = [];
    constructor(description, imageSrc, tags){
        this.description = description;
        this.imageSrc = imageSrc;
        this.tags = tags;
    }
}

/*
var Special = [
    new Medicine("СофтЛайф премиум ватные палочки на бумажной основе с добавлением бамбука №100","../img/medecine/1.jpg", ["Акция", "Для взрослых"]),
    new Medicine("СофтЛайф премиум ватные диски прямоугольные черные №80","../img/medecine/2.jpg", ["Акция", "Для взрослых"]),
    new Medicine("Будь Здоров! Рыбный жир 75мл","../img/medecine/3.jpg", ["Для взрослых", "Противопростутдные"]),
    new Medicine("Будь Здоров! Грин фиточай Фитосбор №1 толокнянка ф/п 2г №20","../img/medecine/4.jpg", ["Для взрослых", "Противопростутдные"]),
    new Medicine("АВС хэлси фуд клетчатка Сибирская стопаппетит 8,5г №14","../img/medecine/5.jpg", ["Для детей", "Противовирусные"])
];

var Medicines =
    [
        new Medicine("СофтЛайф премиум ватные палочки на бумажной основе с добавлением бамбука №100","../img/medecine/1.jpg", ["Акция", "Для взрослых"]),
        new Medicine("СофтЛайф премиум ватные диски прямоугольные черные №80","../img/medecine/2.jpg", ["Акция", "Для взрослых"]),
        new Medicine("Будь Здоров! Рыбный жир 75мл","../img/medecine/3.jpg", ["Для взрослых", "Противопростутдные"]),
        new Medicine("Будь Здоров! Грин фиточай Фитосбор №1 толокнянка ф/п 2г №20","../img/medecine/4.jpg", ["Для взрослых", "Противопростутдные"]),
        new Medicine("АВС хэлси фуд клетчатка Сибирская стопаппетит 8,5г №14","../img/medecine/5.jpg", ["Для детей", "Противовирусные"]),
        new Medicine("Инвитро Здоровье щитовидной железы","https://cdn.budzdorov.ru/media/catalog/product/cache/1e8ef93b9b4867ab9f3538dde2cb3b8a/1/1/113044-c-0-8-9-c089a3e77f904efd2884c5ab3cdad57d3b9ebc0b_113044.jpg", ["Для взрослых", "Противовирусные", "Противопростутдные"]),

        new Medicine("СофтЛайф премиум ватные палочки на бумажной основе с добавлением бамбука №100","../img/medecine/1.jpg", ["Акция", "Для взрослых"]),
        new Medicine("СофтЛайф премиум ватные диски прямоугольные черные №80","../img/medecine/2.jpg", ["Акция", "Для взрослых"]),
        new Medicine("Будь Здоров! Рыбный жир 75мл","../img/medecine/3.jpg", ["Для взрослых", "Противопростутдные"]),
        new Medicine("Будь Здоров! Грин фиточай Фитосбор №1 толокнянка ф/п 2г №20","../img/medecine/4.jpg", ["Для взрослых", "Противопростутдные"]),
        new Medicine("АВС хэлси фуд клетчатка Сибирская стопаппетит 8,5г №14","../img/medecine/5.jpg", ["Для детей", "Противовирусные"]),
        new Medicine("Инвитро Здоровье щитовидной железы","https://cdn.budzdorov.ru/media/catalog/product/cache/1e8ef93b9b4867ab9f3538dde2cb3b8a/1/1/113044-c-0-8-9-c089a3e77f904efd2884c5ab3cdad57d3b9ebc0b_113044.jpg", ["Для взрослых", "Противовирусные", "Противопростутдные"]),

        new Medicine("СофтЛайф премиум ватные палочки на бумажной основе с добавлением бамбука №100","../img/medecine/1.jpg", ["Акция", "Для взрослых"]),
        new Medicine("СофтЛайф премиум ватные диски прямоугольные черные №80","../img/medecine/2.jpg", ["Акция", "Для взрослых"]),
        new Medicine("Будь Здоров! Рыбный жир 75мл","../img/medecine/3.jpg", ["Для взрослых", "Противопростутдные"]),
        new Medicine("Будь Здоров! Грин фиточай Фитосбор №1 толокнянка ф/п 2г №20","../img/medecine/4.jpg", ["Для взрослых", "Противопростутдные"]),
        new Medicine("АВС хэлси фуд клетчатка Сибирская стопаппетит 8,5г №14","../img/medecine/5.jpg", ["Для детей", "Противовирусные"]),
        new Medicine("Инвитро Здоровье щитовидной железы","https://cdn.budzdorov.ru/media/catalog/product/cache/1e8ef93b9b4867ab9f3538dde2cb3b8a/1/1/113044-c-0-8-9-c089a3e77f904efd2884c5ab3cdad57d3b9ebc0b_113044.jpg", ["Для взрослых", "Противовирусные", "Противопростутдные"]),

    ];

var tags =
    [
        "Для детей",
        "Для взрослых",
        "Противовирусные",
        "Противопростутдные"
    ]*/


var makeContent = function(Container, medicine) {
    var offers = $('<div/>', {
        class:  'offers',
    }).appendTo(Container);

    medicine.forEach(function (medic) {
        var offer = $('<div/>', {
            class:  'offer',
        }).appendTo(offers);
        var image = $('<a/>').attr("href", "DeliveryPage.html").appendTo(offer);
        var medicineImage = $('<img>', {
            src: medic.imageSrc
        });
        medicineImage.attr("data-src", medic.imageSrc);
        medicineImage.appendTo(image);
        medic.tags.forEach(function (description) {
            $('<p/>', {
                text: description
            }).appendTo(offer);
        })
        $('<a/>', {
            href: "DeliveryPage.html",
            text: medic.description
        }).appendTo(offer);

    });
}

class AddContent{
    static special = false;
    static srcImage = "";
    static medicineDescription = "";

    static AddToSpecial()
    {
        AddContent.special = !AddContent.special;
    }

    static AddToContent()
    {
        AddContent.medicineDescription = document.getElementById('description').value;
        AddContent.srcImage = document.getElementById('imgSrc').value;

        console.log(AddContent.special);
        console.log(AddContent.medicineDescription);
        console.log(AddContent.srcImage);

        var medicine = new Medicine(AddContent.medicineDescription, AddContent.srcImage)

        if (AddContent.special) { Special.push(medicine);}
        Medicines.push(medicine);

        AddContent.special = false;
        AddContent.srcImage = "";
        AddContent.medicineDescription = "";

        $(".tabs a:first-child span").trigger("click");
    }

}



var main = function (HealthObjects) {
    "use strict";

    var Special = [];
    var Medicines = [];
    var tags = [];

    HealthObjects.forEach((e) => {
        var medicine = new Medicine(e.description, e.img, e.tags);
        Medicines.push(medicine);

        e.tags.forEach((tag) => {
            if (tags.indexOf(tag) === -1)
            {
                tags.push(tag);
            }
        })

        if (e.isSpecial)
        {
            Special.push(medicine);
        }

    });

    //console.log(HealthObjects);

    $(".tabs a span").toArray().forEach(function (element) {
        //создаем обработку щелчков для этого элемента
        $(element).on("click", function ()
        {
            var $element = $(element),
                $content;
            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();
            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<div>");
                makeContent($content, Special);
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<div>");
                makeContent($content, Medicines);
            }
            else if ($element.parent().is(":nth-child(3)")) {
                $content = $("<div/>", {
                    class: 'addContent'
                });

                $('<p/>', {
                    text: "Добавить в спец. предложения",
                    class: 'checkB'
                }).appendTo($content);

                $('<input/>', {
                    id:     'myCheckbox',
                    type: 	'checkbox',
                    class: 'checkB',
                    onclick: "AddContent.AddToSpecial()"
                }).appendTo($content);

                $('<br/>', {
                }).appendTo($content);

                $('<input/>').attr({
                    id:     'imgSrc',
                    type: 	'text',
                    name: 	'img-src',
                    class:  'myinputImg',
                    placeholder: 	'Путь к изображению...'
                }).appendTo($content);

                $('<textarea/>').attr({
                    id:     'description',
                    type: 	'text',
                    name: 	'description',
                    class:  'myinputDsc',
                    placeholder: 	'Описание товара'
                }).appendTo($content);

                var mybutton = $('<button/>',
                    {
                        text: 'Добавить товар',
                        click: AddContent.AddToContent
                    }).appendTo($content);
            }
            else if ($element.parent().is(":nth-child(4)")) {
                $content = $("<div>");
                var offers = $('<div/>', {
                    class:  'offers',
                }).appendTo($content);
                tags.forEach(function (description) {
                    $('<p/>', {
                        text: description
                    }).appendTo(offers);

                });
            } else if ($element.parent().is(":nth-child(5)")) {
                $content = $("<div/>", {
                    class: 'addContent'
                });

                $('<textarea/>').attr({
                    id:     'description1',
                    type: 	'text',
                    name: 	'description',
                    class:  'myinputDsc',
                    placeholder: 	'Название тега'
                }).appendTo($content);

                $('<button/>',
                    {
                        text: 'Добавить тег',
                    }).appendTo($content);


            }



            $("main .content").append($content);

        })
        return false;
        });
    $(".tabs a:first-child span").trigger("click");

};

$(document).ready(() => {
    $.getJSON("../data/Medicine.json", function (HealthObjects) {
    // вызов функции main с аргументом в виде объекта toDoObjects
        main(HealthObjects);
    });
});
