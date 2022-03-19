import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const About=()=>{
    return (
        <div className="about">
            <div className="gori">
                <img src="./img/gori2.jpg"/>
                <span><span className="blue"> Mr. Bhopinder Singh Behal</span> is the Founder and owner of GenNxt Capmus tutorials and is a working professional there
                 as well. He has done his Bachelors of Engineering from MBS College of Engineering and Tech. Jammu in ECE branch. He has
                 more than <span className="blue"> 10 years</span> of experience of teaching in private as well as Govt. institutes and further aims to serve the society
                 by teaching and mentoring high school and high sec. students and guiding them follow the right path to nourish their careers. </span>
            </div>
            <div className="contact">
            <h3>Contact Us</h3>
            <span>We are at your service from 5:00 Pm to 10:00 Pm</span>
            <div className="icon">
 <a href="https://www.linkedin.com/in/gurankit-singh-behal-05873b220/"> <i class="fa fa-linkedin fa_custom fa-2x"></i></a>
<a href="https://www.facebook.com/gurankit.behal/"><i class="fa fa-facebook-square fa_custom fa-2x"></i></a>
<a href="https://www.instagram.com/gurankit_behal/"><i class="fa fa-instagram fa_custom fa-2x"></i></a>
            </div>
<div className="mail">
    <span>Email :- gurankitbehal78114@gmail.com</span> <br/>
    <span>Phone No. :-6006795559</span>
</div>
            </div>
        </div>
    )
};

export default About;