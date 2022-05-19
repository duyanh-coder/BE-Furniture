const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        _id: {
            type: Number
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
        fullName: {
            type: String
        },
        gender: {
            type: String
        },
        address: {
            type: String
        },
        phone: {
            type: String
        },
        birthday: {
            type: String
        },
        status: {
            type: String
        },
        roles: {
            type: String
        },
    },
    {
        _id: false,
        timestamps: true,
    },
)
UserSchema.plugin(AutoIncrement)

const User = mongoose.model('User', UserSchema)
module.exports = User