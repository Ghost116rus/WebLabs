import {makeContent, makeContentAdmin, makeContentAdminSpecial, makeData} from "./AdditionalFunctions.js";
import {Medicine} from "./Medicine.js";
import {addNewMedicine, createTag, getMedicines, getTags, removeTag} from "../http/medicineAPI.js";



let Special = [];
let Medicines = [];
let tags = [];



class AddContent{
    static special = false;
    static srcImage = "";
    static medicineDescription = "";
    static medicineCount = "";
    static medicineName= "";
    static NameTag = "";
    static tags = [];

    static async AddTag()
    {
        AddContent.NameTag = document.getElementById('tag').value;
        await createTag(AddContent.NameTag);

        $(".tabs a:first-child span").trigger("click");
        AddContent.NameTag = "";
    }

    static AddToSpecial()
    {
        AddContent.special = !AddContent.special;
    }

    static Selected(e)
    {
        if (AddContent.tags.indexOf(e) === -1) {
            AddContent.tags.push(e);
        }
    }

    static async RemoveTag(e)
    {
        console.log(e);
        await removeTag(e);

        $(".tabs a:first-child span").trigger("click");
    }

    static RemoveTagFromArr(e)
    {
        AddContent.tags.splice(AddContent.tags.indexOf(e), 1);
    }

    static async AddToContent()
    {
        AddContent.medicineDescription = document.getElementById('description').value;
        AddContent.medicineName = document.getElementById('nameOfMedicine').value;
        AddContent.medicineCount = document.getElementById('count').value;
        AddContent.srcImage = document.getElementById('imgSrc').value;

        console.log(AddContent.special);
        console.log(AddContent.medicineDescription);
        console.log(AddContent.medicineName);
        console.log(AddContent.srcImage);
        // создаем новый элемент списка задач

        var medicine = new Medicine(AddContent.medicineName, AddContent.srcImage, AddContent.tags);

        await addNewMedicine(medicine, AddContent.medicineDescription, AddContent.medicineCount, AddContent.special);

        Medicines.push(medicine);

        if (AddContent.special)
        {
            Special.push(medicine);
        }
/*
        AddContent.special = false;
        AddContent.srcImage = "";
        AddContent.medicineDescription = "";
        AddContent.medicineName = 0;
        AddContent.medicineCount = 0;

        $(".tabs a:first-child span").trigger("click");*/
    }

}



var main = async function (HealthObjects) {
    "use strict";

    const result = makeData(HealthObjects);

    Special = result.Special;
    Medicines = result.Medicines;
    tags = await getTags();

    var myParent = document.getElementById("selectTest");


    var array = tags.tags;


    var selectList = document.createElement("select");
    selectList.id = "mySelect";
    myParent.appendChild(selectList);
    selectList.set


    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i].name;
        option.text = array[i].name;
        selectList.appendChild(option);
    }

    document.querySelector("select").addEventListener('change', function (e) {
        AddContent.Selected(e.target.value)
    })


    $(".tabs a span").toArray().forEach(function (element) {

        //создаем обработку щелчков для этого элемента
        $(element).on("click", async function () {

            myParent.style.visibility='hidden';

            var $element = $(element),
                $content;
            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();
            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<div>");
                let offers = $('<div/>', {
                    class: 'offers',
                }).appendTo($content);
                makeContentAdminSpecial(offers, Special);

            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<div>");
                let offers = $('<div/>', {
                    class: 'offers',
                }).appendTo($content);

                makeContentAdmin(offers, Medicines);

            } else if ($element.parent().is(":nth-child(3)")) {
                myParent.style.visibility='visible';
                $content = $("<div/>", {
                    class: 'addContent'
                });

                AddContent.tags.forEach(function (e) {
                    var cont = $('<div/>', {
                        class: 'offers',
                    }).appendTo($content);
                    $('<p/>', {
                        class: 'tag',
                        text: e
                    }).appendTo(cont);
                    $('<button/>',
                        {
                            class: 'tag',
                            text: 'Удалить тег',
                            click: () => {AddContent.RemoveTagFromArr(e)}
                        }).appendTo(cont); })

                $('<input/>').attr({
                    id: 'nameOfMedicine',
                    type: 'text',
                    name: 'img-src',
                    class: 'myinputImg',
                    placeholder: 'Название'
                }).appendTo($content);


                $('<p/>', {
                    text: "Добавить в спец. предложения",
                    class: 'checkB'
                }).appendTo($content);

                $('<input/>', {
                    id: 'myCheckbox',
                    type: 'checkbox',
                    class: 'checkB',
                    onclick: "AddContent.AddToSpecial()"
                }).appendTo($content);

                $('<input/>').attr({
                    id: 'count',
                    type: 'text',
                    name: 'img-src',
                    class: 'myinputImg',
                    placeholder: 'Количество'
                }).appendTo($content);

                $('<br/>', {}).appendTo($content);


                $('<input/>').attr({
                    id: 'imgSrc',
                    type: 'text',
                    name: 'img-src',
                    class: 'myinputImg',
                    placeholder: 'Путь к изображению...'
                }).appendTo($content);


                $('<textarea/>').attr({
                    id: 'description',
                    type: 'text',
                    name: 'description',
                    class: 'myinputDsc',
                    placeholder: 'Описание товара'
                }).appendTo($content);

                var mybutton = $('<button/>',
                    {
                        text: 'Добавить товар',
                        click: AddContent.AddToContent
                    }).appendTo($content);


            } else if ($element.parent().is(":nth-child(4)")) {
                $content = $("<div>");

                var offers = $('<div/>', {
                    class: 'offers',
                }).appendTo($content);
                tags.tags.forEach(function (e) {
                    var cont = $('<div/>', {
                        class: 'offers',
                    }).appendTo(offers);
                    $('<p/>', {
                        class: 'tag',
                        text: e.name
                    }).appendTo(cont);
                    $('<button/>',
                        {
                            class: 'tag',
                            text: 'Удалить тег',
                            click: () => {AddContent.RemoveTag(e._id)}
                        }).appendTo(cont);


                });
            } else if ($element.parent().is(":nth-child(5)")) {
                $content = $("<div/>", {
                    class: 'addContent'
                });

                $('<textarea/>').attr({
                    id: 'tag',
                    type: 'text',
                    name: 'description',
                    class: 'myinputDsc',
                    placeholder: 'Название тега'
                }).appendTo($content);

                let tagBtn = $('<button/>',
                    {
                        text: 'Добавить тег',
                        click: AddContent.AddTag
                    }).appendTo($content);


            }


            $("main .content").append($content);

        })
        return false;
        });
    $(".tabs a:first-child span").trigger("click");

};

$(document).ready( async () => {
    await main((await getMedicines()).medicines);
});
