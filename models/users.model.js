const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        prenom: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            default: "https://static.vecteezy.com/ti/vecteur-libre/p1/26966960-defaut-avatar-profil-icone-vecteur-de-social-medias-utilisateur-vectoriel.jpg"
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean,
            default: true
        },
        role: {
            type: String,
            default: "user"
        }
    }
)

module.exports = mongoose.model('Users', userSchema)