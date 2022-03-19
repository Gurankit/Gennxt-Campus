const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate");

require('../db/conn');
const User = require('../model/userschema');

router.get('/', (req,res)=>{
    res.send('Hello world from the server router js');
});

router.post('/register',(req,res)=>{
    const {name,email,phone,standard,password,cpassword,course} =req.body;

    if(!name || !email || !phone || !standard || !password || !cpassword || !course){
        return res.status(422).json({error : "Plz fill the details properly"});
    }

    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist){
            return res.status(422).json({error:"Email already exist"});
        }else if(password!=cpassword){
            return res.status(422).json({error:"passwords are not matching"});
        }
        
        const user = new User({name,email,phone,standard,password,cpassword,course});
    
        user.save().then(()=>{
            res.status(201).json({message:"user registered successfully"});
    }).catch((err)=>res.status(500).json({error:"Failed to registered"}));
}).catch(err=>{console.log(err);});
});

// Login route

router.post('/login', async(req,res)=>{
    try{
        let token;
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({error:"Plz fill the data"})
        }

        const userlogin=await User.findOne({email:email});

        if(userlogin){
            const isMatch = await bcrypt.compare(password,userlogin.password);
            token = await userlogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token,{
                expires:new Date(Date.now()+ 25892000000),
                httpOnly:true
            });

            if(!isMatch){
                res.status(400).json({message:"Invalid Credentials"});
            }else{res.json({message: "user signin successfully"});
        }
        }else{
            res.status(400).json({message:"Invalid Credentials"});
        }

    }catch(err){
        console.log(err)
    }
});

// Course wala page

router.get('/mycourses',authenticate,(req,res)=>{
    res.send(req.rootUser);
});

// Logout ka page

router.get('/logout',(req,res)=>{
        res.clearCookie('jwtoken',{path:'/'});
         res.status(200).send('User Logout');
});

module.exports = router;