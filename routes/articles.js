const express=require('express')
const Article= require('./../models/article')
const mongoose=require('mongoose')
const app=express()

router.get('/new',(req,res)=>{
    res.render('articles/new',{article:new Article()})
})
router.get('/:slug',async(req,res)=>{
const article= await Article.findOne({slug:req.params.slug})
if(article==null)  res.redirect('/')
res.render('articles/edit',{article:article})

})
router.get('//edit/:id',async(req,res)=>{
    const article=Article.findById(req.params.id)
    res.render('articles/edit',{article:article})
})
router.post('/',async(req,res,next)=>{
    req.article=new Article()
    next()
    },saveArticle('new'))
    

router.put('/:id',async(req,res,next)=>{
req.article=await Article.findById(req.params.id)
next()
},saveArticle('edit'))

router.delete('/:id',async(req,res)=>{
await Article.findByIdAndDelete(req.params.id)
res.redirect('/')
})

function saveArticle(path) {
    return async(req,res)=>{
    let article=req.article
    {
            title: req.body.title
        
        try{
            article=await article.save()
            res.redirect('/articles/${articles.slug}')
        }
        catch(e){
            res.render('articles/new',{article:article})
        }
    }
        
}
}
module.exports=router