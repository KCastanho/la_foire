const express = require('express');
const dotenv = require('dotenv'); 
const mongoose = require('mongoose');
const app = express();

dotenv.config();

app.use(express.json());

// ROUTER


// MONGO
mongoose
    .connect(process.env.MONGO_URI_LOCAL, { dbName: process.env.DB_NAME }) //premier param : uri, deuxième : nom de la base
    .then(() => console.log('Connexion à mongo réussi')) // si connexion réussi, renvoie se message
    .catch(error => console.log(error)) // sinon message d'erreur


const PORT = process.env.PORT || 8080;

// PREFIX


// LISTEN
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
})