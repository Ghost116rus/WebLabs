import {Medicine} from "./Medicine.js";
import {addToSpecial, deleteFromSpecial, removeMedicine} from "../http/medicineAPI.js";

export const makeContent = (Container, medicine) => {

    medicine.forEach(function (medic) {
        let offer = $('<div/>', {
            class:  'offer',
        }).appendTo(Container);
        let image = $('<a/>').attr("href", "/Pages/MedicinePage.html?" + medic.id).appendTo(offer);
        let medicineImage = $('<img>', {
            src: medic.imageSrc
        });
        medicineImage.attr("src", medic.imageSrc);
        medicineImage.appendTo(image);

        let tags = $('<div/>', {
            class: 'tags',
        }).appendTo(offer);

        medic.tags.forEach(function (description) {
            $('<p/>', {
                class: 'tag',
                text: description
            }).appendTo(tags);
        })
        $('<a/>', {
            class: 'tes',
            href: "/Pages/MedicinePage.html?" + medic.id,
            text: medic.name
        }).appendTo(offer);

    });
}

export const makeContentAdminSpecial = (Container, medicine) => {

    medicine.forEach(function (medic) {
        let offer = $('<div/>', {
            class:  'offer',
        }).appendTo(Container);
        let image = $('<a/>').attr("href", "/Pages/MedicinePage.html?" + medic.id).appendTo(offer);
        let medicineImage = $('<img>', {
            src: medic.imageSrc
        });
        medicineImage.attr("src", medic.imageSrc);
        medicineImage.appendTo(image);

        let tags = $('<div/>', {
            class: 'tags',
        }).appendTo(offer);

        medic.tags.forEach(function (description) {
            $('<p/>', {
                class: 'tag',
                text: description
            }).appendTo(tags);
        })
        $('<a/>', {
            class: 'tes',
            href: "/Pages/MedicinePage.html?" + medic.id,
            text: medic.name
        }).appendTo(offer);
        let second = $('<div/>', {
        }).appendTo(offer);
        $('<button/>',
            {
                text: 'Убрать из раздела избранное',
                click: () => {deleteFromSpecial(medic)}
            }).appendTo(second);

    });
}


export const makeContentAdmin = (Container, medicine) => {

    medicine.forEach(function (medic) {
        let offer = $('<div/>', {
            class:  'offer',
        }).appendTo(Container);
        let image = $('<a/>').attr("href", "/Pages/MedicinePage.html?" + medic.id).appendTo(offer);
        let medicineImage = $('<img>', {
            src: medic.imageSrc
        });
        medicineImage.attr("src", medic.imageSrc);
        medicineImage.appendTo(image);

        let tags = $('<div/>', {
            class: 'tags',
        }).appendTo(offer);

        medic.tags.forEach(function (description) {
            $('<p/>', {
                class: 'tag',
                text: description
            }).appendTo(tags);
        })
        $('<a/>', {
            class: 'tes',
            href: "/Pages/MedicinePage.html?" + medic.id,
            text: medic.name
        }).appendTo(offer);
        let second = $('<div/>', {
        }).appendTo(offer);
        $('<button/>',
            {
                text: 'Добавить в раздел спец. предложения',
                click: () => {addToSpecial(medic)}
            }).appendTo(second);

        $('<button/>',
            {
                text: 'Удалить лекарство',
                click: () => {removeMedicine(medic)}
            }).appendTo(second);

    });
}

export const makeData = (HealthObjects) => {

    let Special = [];
    let Medicines = [];

    HealthObjects.forEach((e) => {
        let medicine = new Medicine(e._id, e.name, e.imageSrc, e.tags);
        Medicines.push(medicine);

        if (e.isSpecial)
        {
            Special.push(medicine);
        }
    });

    return {"Medicines": Medicines, "Special": Special}
}