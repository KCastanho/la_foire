const mongoose = require('mongoose');

const articleSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        },
        avis: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Avis"
        },
        picture: {
            type: String,
            required: true
        },
        img1: {
            type: String,
        },
        img2: {
            type: String,
        },
        img3: {
            type: String,
        },
        img4: {
            type: String,
        },
        status: {
            type: Boolean,
        },
        stock: {
            type: Number,
            required: true
        },
    }
)

module.exports = mongoose.model('Articles', articleSchema)