import {getMedicineById, getMedicines} from "../http/medicineAPI.js";

const main = async () => {

    console.log('document.location.href')
    console.log(document.location.href);

    let id = document.location.href.split("?")[1];

    let res = await getMedicineById(id)
    console.log(res[0].name);
    console.log(res);


    const container = document.getElementById("medicine");


    $('<p/>', {
        text: res[0].name
    }).appendTo(container);


    let center = $('<div/>', {
        class: 'centerImg',
    }).appendTo(container);

    $('<img>', {
        src: res[0].imageSrc
    }).appendTo(center);

    let tags = $('<div/>', {
        class: 'tags',
    }).appendTo(center);

    $('<p/>', {
        class: 'tag',
        text: 'Теги:'
    }).appendTo(tags);

    res[0].tags.forEach(function (description) {
        $('<p/>', {
            class: 'tag',
            text: description
        }).appendTo(tags);
    });


    let descr = $('<div/>', {
        class: 'tags',
    }).appendTo(container);

    $('<p/>', {
        text: 'Описание:'
    }).appendTo(descr);

    $('<p/>', {
        text: res[0].description
    }).appendTo(descr);


    let count = $('<div/>', {
        class: 'tags',
    }).appendTo(container);

    $('<p/>', {
        class: 'tag',
        text: 'Доступное количество:'
    }).appendTo(count);

    $('<p/>', {
        class: 'tag',
        text: res[0].count
    }).appendTo(count);








}

$(document).ready(async () => {
    await main();
});

