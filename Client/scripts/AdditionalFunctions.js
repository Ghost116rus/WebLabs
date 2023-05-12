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

export const makeData = (HealthObjects) => {

    let Special = [];
    let Medicines = [];

    console.log(HealthObjects);

    HealthObjects.forEach((e) => {
        console.log(e.name);
        let medicine = new Medicine(e._id, e.name, e.imageSrc, e.tags);
        Medicines.push(medicine);

        if (e.isSpecial)
        {
            Special.push(medicine);
        }
    });

    return {"Medicines": Medicines, "Special": Special}
}