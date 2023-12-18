const User = require("../models/User");


const checkController=async (req, res) => {
    try {
        const email = req.body.email;
        const month = req.body.month;
        const existingUser = await User.findOne({
            email: email,
        });

        if (existingUser) {
            console.log("You have already registered for this month");
            console.log(month-1, new Date().getMonth());
            if (month  === existingUser.month) {
                // If the month is  the current month, do not allow registration
                return res.status(200).send({
                    success: false,
                    message: "You have already registered this month. Batch change is not allowed",
                });
            }
        }

        const user = new User({
            name: req.body.name,
            address: req.body.address,
            contact: req.body.contact,
            email: req.body.email,
            batch: req.body.batch,
            month: req.body.month,
        });

        await user.save();
        return res.status(200).send({
            success: true,
            message: `Registered successfully for the month of ${req.body.month} `,
        });
    } catch (err) {
        console.error('Error adding user:', err);
        res.status(500).send({
            success: false,
            message: "Error registering user",
        });
    }
}

module.exports= {checkController}