import React from 'react';
import {NavLink} from 'react-router-dom';

const Error=()=>{
    return (
        <div className='error'>
        <h1>404 Page Not Found</h1><br/>
        <h3>The page you have requested either does not exists or has moved to any other address</h3>
        <NavLink to='/'><button id='errorbut'>Back To Homepage</button></NavLink>
        </div>
    )
};

export default Error;