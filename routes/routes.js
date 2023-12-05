const express = require("express");
const CafeModel = require("../models/cafe");
var cors = require("cors");
// const database = require("..");
// const { database } = require("../index");

const router = express.Router();
// const db = process.env.DATABASE_URL;
// database

//Post Method
router.post("/post", async (req, res) => {
  const data = new CafeModel({
    name: req.body.name,
    description: req.body.description,
    imgUrl: req.body.imgUrl,
    stock: req.body.stock,
    price: req.body.price,
    isFavorite: req.body.isFavorite,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await CafeModel.find();
    res.json(data);
    console.log("batii");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", (req, res) => {
  res.send(req.params.id);
});

//Update by ID Method
router.options("*", cors());
router.patch("/update/:id", cors(), async (req, res) => {
  // res.send("Update by ID API");
  console.log("chegueii");
  try {
    CafeModel.findByIdAndUpdate(req.params.id, req.body, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Updated User : ", docs);
        res.json(docs);
      }
    });
    console.log("update bateu");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  console.log("manga");
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  // res.send("Delete by ID API");
  try {
    CafeModel.findByIdAndDelete(req.params.id, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Deleted User : ", docs);
        res.json(docs);
      }
    });
    console.log("update bateu");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
