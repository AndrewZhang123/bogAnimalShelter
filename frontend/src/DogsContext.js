import React, { useState, createContext } from 'react';

export const DogsContext = createContext();

export const DogsProvider = (props) => {

    const dogEmoji = '🐕';

    const [dogs, setDogs] = useState([{
        image: 'https://picsum.photos/id/1025/4951/3301',
        name: 'Zues',
        dogEmoji,
        details: ['Pit Bull', 'Neutered and not vaccinated', 'Female, years old']
    },
    {
        image: 'https://picsum.photos/id/1062/5092/3395',
        name: 'Poseidon',
        dogEmoji,
        details: ['German Shepherd', 'Neutered and vaccinated', 'Female, years old']
    },
    {
        image: 'https://picsum.photos/id/237/3500/2095',
        name: 'Hercules',
        dogEmoji,
        details: ['Anatolian Shepherd', 'Neutered and not vaccinated', 'Female, years old']
    }]);

    return (
        <DogsContext.Provider value={[dogs, setDogs]}>
            {props.children}
        </DogsContext.Provider>
    )
}