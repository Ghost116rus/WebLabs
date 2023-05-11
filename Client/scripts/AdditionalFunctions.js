import {Medicine} from "./Medicine.js";

export const makeContent = (Container, medicine) => {

    medicine.forEach(function (medic) {
        let offer = $('<div/>', {
            class:  'offer',
        }).appendTo(Container);
        let image = $('<a/>').attr("href", "/Pages/MedicinePage.html?" + medic.id).appendTo(offer);
        let medicineImage = $('<img>', {
            src: medic.imageSrc
        });
        medicineImage.attr("data-src", medic.imageSrc);
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
            href: "DeliveryPage.html",
            text: medic.description
        }).appendTo(offer);

    });
}

export const makeData = (HealthObjects) => {

    let Special = [];
    let Medicines = [];
    let tags = [];

    HealthObjects.forEach((e) => {
        let medicine = new Medicine(e.id, e.description, e.img, e.tags);
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

    return {"Medicines": Medicines, "Special": Special, "tags": tags}
}