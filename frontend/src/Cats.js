import React, { useContext } from 'react';
import { CatsContext } from './CatsContext';
import Profile from './Profile';

const Cats = () => {

    const [cats, setCats] = useContext(CatsContext);
    return (
        <div className="page">
            <div className='title'>
                <h1>Cats</h1>
            </div>

            <div className="app">
                {cats.map(cat => (
                    <Profile image={cat.image} name={cat.name} details={cat.details} animalEmoji={cat.catEmoji} />
                ))}
            </div>
        </div>

    )
}

export default Cats;