const mongoose = require('mongoose')

const connectDB = async()=>{
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect("mongodb+srv://sibansu:sibansu@cluster0.3tnk7jt.mongodb.net/?retryWrites=true&w=majority")
        console.log("Connected to mongodb succesfully with host")
    } catch (error) {
        console.log("Mongodb error", error)
    }
}

module.exports = connectDB