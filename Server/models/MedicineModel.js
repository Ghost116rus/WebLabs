import mongoose from "mongoose";

const MedicineSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    imageSrc: {
        type: String,
        required: true
    },
    isSpecial: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
    tags: {
        type: Array,
        default: [],
    },
})

export default mongoose.model('Medicine', MedicineSchema)