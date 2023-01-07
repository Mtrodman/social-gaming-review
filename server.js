require('dotenv').config
const express = require('express')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const app = express()

const User = require('./models/users')

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(methodOverride('_method'))


app.get('/logincheck', async (res, req) => {


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
        const accessToken = createToken(userAuthentification)
        res.cookie("user-access", userAuthentification,{
            maxAge: 60*60*24*2*1000,
            httpOnly: true
        })
        res.redirect(`/user/profile/${userAuthentification.id}`)
    } 
    catch(err){
        res.status(400).json('Invalid credientials')
    }


})

app.get('/createaccount', async (res, req) => {

    const {name, username, password, posts} = req.body
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
            name: name,
            email: email,
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