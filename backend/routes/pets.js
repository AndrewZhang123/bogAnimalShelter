const express = require("express");
const router = express.Router();
const Pet = require("../models/pet");

/* GET all Pets in the database */
router.get("/", (req, res, next) => {
    console.log("Hey")
    Pet.find().then(pet => {
        res.status(200).json(pet)
    })
});

/* POST a new pet in the database */
router.post("/", (req, res, next) => {
    const newPet = new Pet(req.body)
    console.log({newPet})
    newPet
    .save().then(pet => {
        res.status(201).json(pet)
    })
    .catch(err => {
        console.log(err)
    })
})

/* GET Pets grouped by animals in the database */
router.get("/byAnimalTypes", (req, res, next) => {
    Pet.aggregate([
        {
            $group: { 
                _id: "$animalType", 
                pets: { $addToSet: {
                    name: "$name",
                    breed: "$breed",
                    status: "$status",
                    gender: "$gender",
                    yearsOld: "$yearsOld",
                    adopted: "$adopted"
                }
            }
        } 
    }])
    .then(petList => {
        console.log({petList})
        res.status(200).json(petList)
    })
    .catch(err => {
        console.log(err);
    })
})

/* DELETE Pets with specific id */
router.delete("/", (req, res, next) => {
    console.log(req.query.id)
    Pet.findByIdAndDelete(req.query.id)
    .then(deletedItem => {
        res.status(200).json(deletedItem)
    })
    .catch(err => {
        console.log(Hi)
        console.log(err)
    })
})

/* GET info abt pet when passed in the name and animalType" */
router.get("/:name/:animalType", (req, res) => {
    Pet.find({
            name: req.params.name, 
            animalType: req.params.animalType
        })
    .then(pet => {
        res.status(200).json(pet)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.patch("/:name/:animalType", (req, res, next) => {
    Pet.findOneAndUpdate({
        name: req.params.name, 
        animalType: req.params.animalType 
    }).then(pet => {
        res.status(202).json(pet)
    })
})


module.exports = router