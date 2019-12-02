import React from 'react';
import './App.css';


function About(props) {
    return (
        <div className='about'>
            <img src={props.image} alt="dog" />
            <h2>{props.name}</h2>
            <ul>
                <li>{props.details[0]}</li>
                <li>{props.details[1]}</li>
                <li>{props.details[2]}</li>
            </ul>
            <a href="#">View more details </a>

        </div>
    )
}

export default About;