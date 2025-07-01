const express = require('express');
const filmesRoutes = require('./routes/filmesRoutes');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express()
const port = process.env.PORT


mongoose.connect(process.env.MONGO_URL)

app.use(express.json())
app.use('/filmes', filmesRoutes)

app.listen(port, () => {
    console.log("Aplicação rodando...")
})