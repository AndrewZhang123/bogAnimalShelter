import React, { useContext } from 'react';
import './App.css';
import { ProfileContext } from './ProfileContext;

function Profile() {

    const [[dogs, setDogs], [cats, setCats]] = useContext(ProfileContext);

    return (
        <div className='profile'>
            <img src={props.image} alt="dog" />
            <h2>{props.name}</h2>
            <div className='details'>
                <ul className='emojis'>
                    <li>🐕 </li>
                    <li>💉 </li>
                    <li id='female'>⚥ </li>
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