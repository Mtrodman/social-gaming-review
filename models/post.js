require('dotenv').config()
const mongoose = require('mongoose')
const {Schema} = mongoose


const postSchema = new Schema({

})

const Post = mongoose.model('Users', postSchema)
module.exports = Post