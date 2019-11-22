const express = require("express");
const router = express.Router();
const Pet = require("../models/pet");

router.get("/", (req, res, next) => {
    Pet.find().then(pet => {
        res.json(pet)
    })
});

module.exports = router