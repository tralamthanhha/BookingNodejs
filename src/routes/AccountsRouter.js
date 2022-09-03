const express=require('express');
const route=express.Router();

const AccountsController=require('../controllers/AccountsController')

route.get('/signup',AccountsController.getSignUp)

route.get('/login',AccountsController.getLogIn)

route.post('/signup',AccountsController.postSignUp)

route.post('/login',AccountsController.postLogIn)

route.post('/logout',(req,res)=>{
    req.session.destroy()
    return res.redirect('/')
})

route.get('/:slug',AccountsController.getDetails)
module.exports=route