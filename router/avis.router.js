// Importation du module express
const express = require('express');

// Creation d'un router express
const router = express.Router();

const ModelAvis = require('../models/avis.model');
const { model } = require('mongoose');


// POST - pour ajouter un nouvel avis
router.post('/add', async (req, res) => {
    try {
        await ModelAvis.create(req.body);
        res.status(201).json('avis add !');
    } catch (error){
        res.status(500).json(error.message);
    }
})


// DELETE - pour supprimer un avis
router.delete('/delete/:id', async (req, res) => {
    try{
        const avis = await ModelAvis.findByIdAndDelete(req.params.id);
        if(!avis) return res.status(404).json('avis not found ! ');
        res.status(200).json('avis deleted !');
    } catch (error) {
        res.status(500).json(error.message);
    }
})


// GET - récupérer les avis d'un article

router.get('/get/:article', async (req, res) => {
    try {
        const avis = await ModelAvis.find({article: req.params.article}).populate('article');
        if(!avis) return res.status(404).json('Avis not found')
        res.status(200).json(avis);
    } catch (error) {
       res.status(500).json(error.message);
    }   
})

module.exports = router;