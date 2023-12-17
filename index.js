const express = require("express");
const mongoose = require('mongoose');
const userRoute = require("./routes/user");
var cors = require('cors');
const connectDB = require("./Config/db");

const app = express();


app.use(express.json());
app.use(cors());


connectDB()

app.use("/api", userRoute);


app.listen("8000", () => {
    console.log("server started");
})