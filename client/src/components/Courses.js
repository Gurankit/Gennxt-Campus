import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses=()=>{
    const navigate= useNavigate();
    const [userData,setuserData] = useState('');

    const callcourse = async ()=>{
        try{
            const res = await fetch ('/mycourses',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });

            const data = await res.json();
            console.log(data);
            setuserData(data);

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        }catch (err){
            console.log(err);
            navigate('/login');
        }
    }

    useEffect(()=>{
        callcourse();
    },[]);

    return (
        <div className="courses">
        <h4>Details of your applied Course have been listed below</h4>
        <div className="coursesin">
        <div className="coursesleft">
        <h6>Your Name :-</h6>
        <h6>Your Email :-</h6>
        <h6>Your Phone No. :-</h6>
        <h6>Your Class :-</h6>
        <h6>Your Course :-</h6>
        </div>
        <form method="GET">
        <div className="coursesright">
        <span>{userData.name}</span>
        <span>{userData.email}</span>
        <span>{userData.phone}</span>
        <span>{userData.standard}</span>
        <span>{userData.course}</span>
        </div>
        </form>
        </div>
        </div>
    )
};

export default Courses;