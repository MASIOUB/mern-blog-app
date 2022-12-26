const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        ville:{
            type: String,
        },
        accessToken:{
            type: String,
        },
        refreshToken:{
            type: String,
        },
        role: {
            type: String,
            default: "user",
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User', userSchema);