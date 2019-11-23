const mongoose = require("mongoose");

const petSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            default: "unknown"
        },
        breed: {
            type: String,
            required: true,
            default: "unknown"
        },
        status: {
            type: String,
            required: true,
            default: "unknown"
        },
        gender: {
            type: String,
            required: true,
        },
        yearsOld: {
            type: String,
            required: true,
            default: "unknown"
        },
        adopted: {
            type: Boolean,
            required: true,
            default: false
        },
        animalType: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model("Pet", petSchema);