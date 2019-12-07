import React, { useState, createContext } from 'react';

export const CatsContext = createContext();

export const CatsProvider = (props) => {

    const catEmoji = '🐈';

    const [cats, setCats] = useState([{
        image: 'https://picsum.photos/id/1025/4951/3301',
        name: 'Zues',
        catEmoji,
        details: ['Pit Bull', 'Neutered and not vaccinated', 'Female, years old']
    },
    {
        image: 'https://picsum.photos/id/1062/5092/3395',
        name: 'Poseidon',
        catEmoji,
        details: ['German Shepherd', 'Neutered and vaccinated', 'Female, years old']
    },
    {
        image: 'https://picsum.photos/id/237/3500/2095',
        name: 'Hercules',
        catEmoji,
        details: ['Anatolian Shepherd', 'Neutered and not vaccinated', 'Female, years old']
    }]);

    return (
        <CatsContext.Provider value={[cats, setCats]}>
            {props.children}
        </CatsContext.Provider>
    )
}