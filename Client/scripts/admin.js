import {makeContent, makeData} from "./AdditionalFunctions.js";
import {Medicine} from "./Medicine.js";
import {getMedicines} from "../http/medicineAPI.js";



let Special = [];
let Medicines = [];
let tags = [];



class AddContent{
    static special = false;
    static srcImage = "";
    static medicineDescription = "";

    static AddToSpecial()
    {
        AddContent.special = !AddContent.special;
    }

    static async AddToContent()
    {
        AddContent.medicineDescription = document.getElementById('description').value;
        AddContent.srcImage = document.getElementById('imgSrc').value;

        console.log(AddContent.special);
        console.log(AddContent.medicineDescription);
        console.log(AddContent.srcImage);
        // создаем новый элемент списка задач
        var newMedicine = {"description": AddContent.medicineDescription, "img":AddContent.srcImage, "isSpecial": AddContent.special};

        var res = await (await fetch("http://localhost:3000/todos", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newMedicine)
            }
        )).json()

        var medicine = new Medicine(res.id, AddContent.medicineDescription, AddContent.srcImage, []);
        Medicines.push(medicine);

        if (AddContent.special)
        {
            Special.push(medicine);
        }

        AddContent.special = false;
        AddContent.srcImage = "";
        AddContent.medicineDescription = "";

        $(".tabs a:first-child span").trigger("click");
    }

}



var main = function (HealthObjects) {
    "use strict";

    const result = makeData(HealthObjects);

    Special = result.Special;
    Medicines = result.Medicines;
    tags = result.tags;


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
                let offers = $('<div/>', {
                    class:  'offers',
                }).appendTo($content);
                makeContent(offers, Special);
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<div>");
                let offers = $('<div/>', {
                    class:  'offers',
                }).appendTo($content);
                makeContent(offers, Medicines);
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

$(document).ready( async () => {
    main((await getMedicines()).medicines);
});
