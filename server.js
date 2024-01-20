const express= require('express')
const mongoose= require('mongoose')
const articleRouter=require("./routes/articles")
const app=express()
const Article=require('./models/article')
const mehodOverride= require('method-override')

mongoose.connect('mongodb://localhost/nehaBlogDB');

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))
app.get('/',(req,res)=>{
const articles= Article.find().sort({createdAt:'desc'})

    res.render('articles/index',{articles:articles})
})
app.use('/articles',articleRouter)
app.listen(8080)