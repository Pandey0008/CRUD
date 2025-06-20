const express = require("express");
const User = require("../models/userModel");
const router = express.Router();

router.post("/create", async(req, res) => {
    try {
        const { name, email, age } = req.body;
        const user = await User.create({ name, email, age });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.get("/", async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get("/:id", async(req, res) => {
    try {
        const user = await User.findById({_id:req.params.id});
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch("/:id", async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate({_id:req.params.id}, req.body, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete("/:id", async(req, res) => {
    try {
        const user = await User.findByIdAndDelete({_id:req.params.id});
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;

