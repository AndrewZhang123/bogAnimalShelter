import React, { useContext } from 'react';
import Profile from './Profile';
import { DogsContext } from './DogsContext';

const Dogs = () => {

    const [dogs, setDogs] = useContext(DogsContext);
    return (
        <div className='page'>
            <div className='title'>
                <h1>Dogs</h1>
            </div>
            <div className="app">
                {dogs.map(dog => (
                    < Profile image={dog.image} name={dog.name} details={dog.details} animalEmoji={dog.dogEmoji} />
                ))}
            </div>
        </div>
    )
}

export default Dogs;