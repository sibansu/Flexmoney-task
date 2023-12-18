const mongoose = require('mongoose')

const connectDB = async()=>{
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to mongodb succesfully")
    } catch (error) {
        console.log("Mongodb error", error)
    }
}

module.exports = connectDB