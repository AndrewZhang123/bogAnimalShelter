import React, { useContext } from 'react';
import './App.css';

function Profile(props) {

    return (
        <div className='profile'>
            <img src={props.image} alt="" />
            <h2>{props.name}</h2>
            <div className='details'>
                <ul className='emojis'>
                    <li> {props.animalEmoji} </li>
                    <li> 💉 </li>
                    <li id='gender'> ⚥ </li>
                </ul>
                <ul>
                    <li> {props.details[0]}</li>
                    <li> {props.details[1]}</li>
                    <li> {props.details[2]}</li>
                </ul>
            </div>

            <a href="#">View more details </a>

        </div>
    )
}

export default Profile;