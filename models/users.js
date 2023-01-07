require('dotenv').config()
const mongoose = require('mongoose')
const {Schema} = mongoose

module.exports.fish = require("./post.js")

const userSchema = new Schema({
username:{ type: String, required: true},
password:{ type: String, required: true},
posts: [{type: Schema.Types.ObjectId, ref:'fishes'}]
})

const Users = mongoose.model('Users', userSchema)
module.exports = Users