import React from "react";
import {Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Register from "./components/Register";
import Login from "./components/Login";
import Error from "./components/Error";
import About from "./components/About";
import Logout from "./components/Logout";
import Footer from "./components/Footer";

const App =()=>{
  return(
    <>
    <Navbar/>

    <Routes>
    <Route exact path="/" element = {<Home/>}/>
    <Route path="/mycourses" element = {<Courses/>}/>
    <Route path="/register" element = {<Register/>}/>
    <Route path="/login" element = {<Login/>}/>
    <Route path="/about" element = {<About/>}/>
    <Route path="/logout" element = {<Logout/>}/>
    <Route path="*" element={<Error/>}/>
    </Routes>

    <Footer/>
    </>
  )
};

export default App;