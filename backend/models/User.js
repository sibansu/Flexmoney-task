const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    batch: {
        type: String,
        required: true,        
    },
    month: {
        type: String,
        required: true,
    },
    
        
    },
     {timestamps: true}
);

const User = mongoose.model("User",UserSchema);
module.exports = User;