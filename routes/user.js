const router = require("express").Router();
const { checkController } = require("../controllers/userController.js");
const User = require("../models/User.js");


router.post("/add", checkController);


router.get("/all", async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        res.status(400).send
    }
});

module.exports = router;
