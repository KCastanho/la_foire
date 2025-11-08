const mongoose = require('mongoose');

const avisSchema = mongoose.Schema(
    {
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
            required: true
        },
        article: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Articles",
            required: true
        }
    }
)

module.exports = mongoose.model('Avis', avisSchema)