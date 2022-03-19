import React from "react";
import { NavLink } from "react-router-dom";

const Home=()=>{
    return (
        <div className="home">
            <div className="mainhome">
                <h1>GenNxt Campus <br/>Tutorials</h1>
                <div className="inhome">
                <div className="pqr">
                    <span>Welcome to GenNxt Campus Tutorials ! <br/> <br/>
                    We provide quality education to strengthen the basics of students and to prepare them for a world full of competitions</span><br/>
                    <NavLink id="join" to="/register">Join Us</NavLink>
                </div>
                    <img src='./img/coach.png'/>
                </div>
            </div>
        </div>
    )
};

export default Home;