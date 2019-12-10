const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('')

const userSchema = new Schema({
    name: {
        type: String
    },
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: [4, 'La contraseña debe tener almenos 4 caracteres']
    },
    email: {
        type: String,
        required: true
    },
    lastLogin: {
        type: Date,
        default: null
    }
}, {timestamps: true})

const user = mongoose.model('User', userSchema)
module.exports.user