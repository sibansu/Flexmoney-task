const express = require("express");
const mongoose = require('mongoose');
const userRoute = require("./routes/user");
var cors = require('cors');
const connectDB = require("./Config/db");
const path = require('path')
const app = express();


app.use(express.json());
app.use(cors());


connectDB()

app.use("/api", userRoute);

app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen("8000", () => {
    console.log("server started");
})