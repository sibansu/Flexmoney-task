const express = require("express");
const mongoose = require('mongoose');
const userRoute = require("./routes/user");
var cors = require('cors');
const connectDB = require("./Config/db");
const path = require('path')
const app = express();
const dotenv = require('dotenv')

dotenv.config()

app.use(express.json());
app.use(cors());


connectDB()

app.use("/api", userRoute);

app.use(express.static(path.join(__dirname, './client/build')))


app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log("server started");
})