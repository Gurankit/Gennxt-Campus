const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const CookieParser = require('cookie-parser');
const app= express();
app.use(CookieParser());

dotenv.config({path:'./config.env'});
require('./db/conn');
app.use(express.json());
const User = require("./model/userschema");
const cookieParser = require('cookie-parser');


app.use(require('./router/auth'));

const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(_dirname,'client','build','index.html'));
    })
}

app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`);
});