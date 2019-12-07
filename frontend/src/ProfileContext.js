import React, { useState, createContext } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = (props) => {
    const [dogs, setDogs] = useState([{
        image: 'https://picsum.photos/id/1025/4951/3301',
        name: 'Zues',
        details: ['Pit Bull', 'Neutered and not vaccinated', 'Female, years old']
    },
    {
        image: 'https://picsum.photos/id/1062/5092/3395',
        name: 'Poseidon',
        details: ['German Shepherd', 'Neutered and vaccinated', 'Female, years old']
    },
    {
        image: 'https://picsum.photos/id/237/3500/2095',
        name: 'Hercules',
        details: ['Anatolian Shepherd', 'Neutered and not vaccinated', 'Female, years old']
    }]);

    const [cats, setCats] = useState([{
        image: 'https://picsum.photos/id/1025/4951/3301',
        name: 'Osiris',
        details: ['Main coone', 'Neutered and not vaccinated', 'Female, years old']
    },
    {
        image: 'https://picsum.photos/id/1062/5092/3395',
        name: 'Seth',
        details: ['Domestic medium hair', 'Neutered and vaccinated', 'Female, years old']
    },
    {
        image: 'https://picsum.photos/250/300',
        name: "Ra's al Ghul",
        details: ['Domestic shorthair', 'Neutered and not vaccinated', 'Female, years old']
    }]);

    return (
        <ProfileContext.Provider value={[dogs, setDogs], [cats, setCats]}>
            {props.children}
        </ProfileContext.Provider>
    )
}