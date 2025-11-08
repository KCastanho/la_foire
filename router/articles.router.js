// Importation du module express
const express = require('express');

// Creation d'un router express
const router = express.Router();

const Modelarticles = require('../models/articles.model');
const { model } = require('mongoose');


// POST - pour ajouter un nouvel article
router.post('/add', async (req, res) => {
    try {
        await Modelarticles.create(req.body);
        res.status(201).json('article add !');
    } catch (error){
        res.status(500).json(error.message);
    }
})


// GET - pour récupérer tous les articles
router.get('/all', async (req, res) => {
    try{
        const articles = await Modelarticles.find();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json(error.message);
    }
})


// GET - pour récupérer un article par son id
router.get('/get/:id', async (req, res) => {
    try{
        const articles = await Modelarticles.findById(req.params.id);
        if(!articles) return res.status(404).json('article not found ! ');
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json(error.message);
    }
})


// UPDATE - pour modifier un article
router.put('/update/:id', async (req, res) => {
    try{
        const articles = await Modelarticles.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!articles) return res.status(404).json('article not found ! ');
        res.status(200).json('article updated !');
    } catch (error) {
        res.status(500).json(error.message);
    }
})


// DELETE - pour supprimer un article
router.delete('/delete/:id', async (req, res) => {
    try{
        const articles = await Modelarticles.findByIdAndDelete(req.params.id);
        if(!articles) return res.status(404).json('article not found ! ');
        res.status(200).json('article deleted !');
    } catch (error) {
        res.status(500).json(error.message);
    }
})


// GET - trier les articles par prix (asc/desc)
router.get('/trie/price', async (req, res) => {
  try {
    const articles = await Modelarticles.find().sort({ price:  1});

    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json(error.message);
  }
});


// GET - trier les articles par note (asc/desc)
// Je n'ai pas réussi, je voulais d'abord calculer la moyenne des notes par article pour ensuite les comparées et les affichées de la meilleure moyenne à la moins bonne.



module.exports = router;