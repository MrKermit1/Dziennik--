const { log } = require('console');
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require("dotenv").config()
const app = express();

app.use(cors())
app.use(express.json())

const db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("serwer działa na porcie 3001");
})