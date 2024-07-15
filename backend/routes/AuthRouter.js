const router = require('express').Router();
const User = require('../models/UserModel');

// Register Route
router.post("/signup", async (req, res) => {
    const { FirstName, LastName, Email, Password } = req.body;

    try {
        const existingUser = await User.findOne({ Email });
        if (existingUser) {
            return res.status(400).json("User already exists");
        }

        const newUser = new User({ FirstName, LastName, Email, Password });
        await newUser.save();
        res.status(201).json("User registered successfully");
    } catch (error) {
        res.status(500).json("Error registering user");
    }
});

// Login Route
router.post("/login", async (req, res) => {
    const { Email, Password } = req.body;

    try {
        const user = await User.findOne({ Email, Password });
        if (user) {
            res.status(200).json("Login successful");
        } else {
            res.status(400).json("Invalid email or password");
        }
    } catch (error) {
        res.status(500).json("Error logging in");
    }
});

module.exports = router;
