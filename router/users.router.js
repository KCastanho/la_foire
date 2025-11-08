// Importation du module express
const express = require('express');

// Creation d'un router express
const router = express.Router();

const ModelUser = require('../models/users.model');
const { model } = require('mongoose');

// POST - pour ajouter un nouvel utilisateur
router.post('/add', async (req, res) => {
    try {
        await ModelUser.create(req.body);
        res.status(201).json('user add !');
    } catch (error){
        res.status(500).json(error.message);
    }
})


module.exports = router;