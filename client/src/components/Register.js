import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register=()=>{

const navigate =useNavigate();

const [user,setuser] = useState({
    name:"",email:"",phone:"",standard:"",password:"",cpassword:"",course:""
});
let name,value;

const handleInputs=(e)=>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setuser({...user,[name]:value})
}

const PostData = async (e)=>{
    e.preventDefault();
    const {name,email,phone,standard,password,cpassword,course} = user;

    const res = await fetch("/register",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            name,email,phone,standard,password,cpassword,course
        })
    });
    const data= await res.json();

    if(res.status === 422 || !data){
        window.alert("invalid registration")
    }else{
        window.alert("registration successful")

        navigate("/login");
    }
}

    return (
        <div className="form">
            <h1>Register Yourself <br/>
            Join Us Today !!</h1><br/>
            <div className="formin">
            <form method="POST">
            <div className="forminin">
               <div>Name :- <input name="name" className="abc" value={user.name} onChange={handleInputs} type='text' placeholder="Enter Your Name"/></div>
               <div>Email :- <input name="email" className="abc" value={user.email} onChange={handleInputs} type='text' placeholder="Enter Your Email"/></div>
               <div>Phone :- <input name="phone" className="abc" value={user.phone} onChange={handleInputs} type='number' placeholder="Enter Your Phone No."/></div>
               <div>Your Class :- <input name="standard" id="a" className="abc" value={user.standard} onChange={handleInputs} type='number' placeholder="For Eg: Enter '9' for 9th "/></div>
               <div>Password :- <input name="password" id="b" className="abc" value={user.password} onChange={handleInputs} type='text' placeholder="Enter your password"/></div>
               <div>Confirm Password :- <input name="cpassword" id="c" className="abc" value={user.cpassword} onChange={handleInputs} type='text' placeholder="Confirm your password"/></div><br/>
               <div>Choose Your Course :-<br/> <input className="abc" value={user.course} onChange={handleInputs} type='radio'value='9th PCM' name="course"/>9th PCM <br/>
               <input className="abc" value={user.course} onChange={handleInputs} type='radio'value='9th Hindi' name="course"/>9th Hindi <br/>
               <input className="abc" value={user.course} onChange={handleInputs} type='radio'value='10th PCM' name="course"/>10th PCM <br/>
               <input className="abc" value={user.course} onChange={handleInputs} type='radio'value='10th Hindi & English' name="course"/>10th Hindi & English<br/>
               <input className="abc" value={user.course} onChange={handleInputs} type='radio'value='10th Hindi English PCM' name="course"/>10th Hindi & English+PCM<br/>
               <input className="abc" value={user.course} onChange={handleInputs} type='radio'value='11th Phy & Chem' name="course"/>11th Phy & Chem<br/>
               <input className="abc" value={user.course} onChange={handleInputs} type='radio'value='12th Phy & Chem' name="course"/>12th Phy & Chem</div>
               <input id="d" onClick={PostData} type='button' value='Register' />
               </div>
               </form>
               <div className="regphoto">
               <img src="./img/registration.png"/> <br/>
               <NavLink to='/login'>Already Registered ??</NavLink>
               </div>
            </div>
        </div>
    )
};

export default Register;