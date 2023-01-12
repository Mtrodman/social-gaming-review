require('dotenv').config
const express = require('express')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')
const app = express()

const User = require('./models/users')
const Post = require('./models/post')
const { Router } = require('express')

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(methodOverride('_method'))

app.get('/', (res,req) => {
    res.send('Hello')
})
app.get('/game', async (res, req) => {
    let posts = Post.find()
    res.json(posts)
})


app.post('/game', async (res, req) => {
    const userAccess = req.cookies['user-access']

    let user = await User.findById(userAccess).populate('posts')
    let newPost = Post.create(req.body)

    await user.posts.push(newPost.id)
    user.save()
    res.redirect('/game')
})

// app.get('/login', (res, req) => {
//     res.render('login')
// })

app.get('/createaccount', (req, res) => {
    console.log('Hello')
    res.send('CreateAccount')
})



app.get('/profile/:id'), async(res,req) => {

    let findUsers = await User.findById(req.params.id).populate('posts')
    res.json(findUsers)
}


app.post('/logincheck', async (res, req) => {

    const {username, password} = req.body
    let userAuthentification = await User.findOne({where: {username: username}})

    //compare crypted password to password entered
    const dbPassword = userAuthentification.password
    let passwordCompare = await bcrypt.compare(password,dbPassword)


    const userId = userAuthentification.id
    if(passwordCompare == false){
        req.flash('error', "Enter in the correct Username and Password")
        res.redirect('/user/login')
    }

        try{
        res.cookie("user-access", userId,{
            maxAge: 60*60*24*2*1000,
            httpOnly: true
        })
        res.redirect(`/user/profile/${userAuthentification.id}`)
    } 
    catch(err){
        res.status(400).json('Invalid credientials')
    }


})

app.post('/createaccount', async (res, req) => {

    const {username, password, posts} = req.body
    const hash = await bcrypt.hash(password, 10)
    let findUsers = await User.find()


    let duplicateUsername = findUsers.filter((item) => {
        if(item.username == username) return item
    })
    let duplicateEmail = findUsers.filter((item) => {
        if(item.email == email) return item
    })
    


    if(duplicateUsername.length == 0 && duplicateEmail.length == 0){
        let createUsers = await User.create({
            username: username,
            password: hash,
            posts: posts
        })
            try{
            res.redirect(`/user/login`)
            }
                catch(err){
                    res.status(400).json({error: err})
                }
    } 
    else if(duplicateUsername != 0 && duplicateEmail.length == 0){
        res.status(400).json('That Username already exists')
    }
    else if(duplicateUsername == 0 && duplicateEmail.length != 0){
        res.status(400).json('That Email already exists')
    }

    else{
        res.status(400).json('Username and email is already in use')
    }
})


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log(process.env.MONGO_URI)})

    
app.listen(process.env.PORT)