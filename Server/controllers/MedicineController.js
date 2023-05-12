import MedicineModel from "../models/MedicineModel.js"
import TagModel from "../models/TagModel.js"

function GetLightDataAboutMedicine (medicinesData) {
    const medicines = [];

    medicinesData.map(medicine => {
        medicines.push({
            _id: medicine._id,
            name: medicine.name,
            imageSrc: medicine.imageSrc,
            isSpecial: medicine.isSpecial,
            tags: medicine.tags,
        })
    })

    return medicines;
}


export const getOneById = async (req, res) => {
    try {

        const medicineId = req.body.id;
        let medicine = await MedicineModel.find({_id: medicineId}).exec();

        return res.json({medicine: medicine});
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Не удалось получить лекарство",
        })
    }
}

export const getAll = async (req, res) => {

    try {
        let medicines = await MedicineModel.find().exec();

        res.json({medicines: GetLightDataAboutMedicine(medicines)});
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Не удалось получить лекарства",
        })
    }

}


export const create = async (req, res) => {
    try {
        const doc = new MedicineModel({
            name: req.body.name,
            imageSrc: req.body.img,
            isSpecial: req.body.isSpecial,
            description: req.body.description,
            count: req.body.count,
            tags: req.body.tags,
        });

        const medicine = await doc.save();

        res.json({
            success: true,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Не удалось создать лекарство",
        })
    }
}

export const update = async (req, res) => {
    try {
        const medicineId = req.body.id;
        console.log(medicineId);
        console.log("medicineId");

        const doc = await MedicineModel.findOne({_id: medicineId})

        if (!doc) {
            return res.status(404).json({
                msg: 'Лекарство не найдено',
            });
        }

        await MedicineModel.updateOne(
            {
                _id: medicineId,
            },
            {
                name: req.body.name,
                imageSrc: req.body.img,
                isSpecial: req.body.isSpecial,
                description: req.body.description,
                count: req.body.count,
                tags: req.body.tags,
            },
        );

        res.json({
            success: true,
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Не удалось обновить лекарство",
        })
    }
}

export const remove = (req, res) => {
    try {
        const medicineId = req.body.id;

        MedicineModel.findOneAndDelete({
            _id: medicineId,
        }).then(
            (doc) => {
                if (!doc) {
                    return res.status(404).json({
                        message: 'Лекарство не найдено',
                    });
                }
                res.json({
                    success: true,
                });
            })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Не удалось удалить Лекарство",
        })
    }
};

export const createTag = async (req, res) => {
    try {
        const doc = new TagModel({
            name: req.body.name,
        });

        const tag = await doc.save();

        res.json({
            success: true,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Не удалось создать тег",
        })
    }
}

export const getAllTags = async (req, res) => {

    try {
        let tags = await TagModel.find().exec();

        res.json({tags: tags});
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Не удалось получить теги",
        })
    }

}

export const removeTag = (req, res) => {
    try {
        const tagId = req.body.id;

        TagModel.findOneAndDelete({
            _id: tagId,
        }).then(
            (doc) => {
                if (!doc) {
                    return res.status(404).json({
                        message: 'Тег не найден',
                    });
                }
                res.json({
                    success: true,
                });
            })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Не удалось удалить Тег",
        })
    }
};