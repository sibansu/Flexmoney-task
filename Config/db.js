const mongoose = require('mongoose')

const connectDB = async()=>{
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect("mongodb+srv://sibansu:sibansu@cluster0.nt6iyja.mongodb.net/?retryWrites=true&w=majority")
        console.log("Connected to mongodb succesfully")
    } catch (error) {
        console.log("Mongodb error", error)
    }
}

module.exports = connectDB