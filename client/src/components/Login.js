import React from "react";
import { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";

const Login =()=>{

    const navigate=useNavigate();

const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const loginUser = async(e)=>{
    e.preventDefault();

    const res =await fetch("/login",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            email,password
        })
    });

    const data =await res.json();

    if(res.status ===400 || !data){
        window.alert("Invalid Credentials");
    }else{
        window.alert("Login Successful")
        navigate('/mycourses');
    }
}

    return (
        <div className="login">
            <h1>Sign In</h1>
            <span>Log In to your account to view your Course</span>
            <div className="loginin">
            <form method="POST">
            <div className="logininin">
                <div>Email :-<input name="email" value={email} onChange={(e)=> setEmail(e.target.value)} type='text' placeholder="Enter your Email"/></div>
                <div>Password :-<input name="password" value={password} onChange={(e)=> setPassword(e.target.value)} id="e" type='text' placeholder="Enter your Password"/></div>
                <input name="login" onClick={loginUser} id="logbut" type='button' value='Log In'/>
                </div>
                </form>
                <div className="logphoto">
                <img src="./img/login.png"/>
                <NavLink to='/register'>New Student ?? <br/> Create New Account</NavLink>
                </div>
            </div>
        </div>
    )
};

export default Login;