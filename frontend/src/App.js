import React, { useState } from 'react';
import './App.css';
import Dogs from './profile';
import Profile from './profile';
import About from './about';


function App() {

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
    <div>
      <div className="page">
      <div className='title'>
        <h1>Dogs</h1>
      </div>
      <div className="app">
        {dogs.map(dog => (
          < Profile image={dog.image} name={dog.name} details={dog.details} />
        ))}
      </div>
      <div className='title'>
        <h1>Cats</h1>
      </div>

      <div className="app">
        {cats.map(cat => (
          <Profile image={cat.image} name={cat.name} details={cat.details} />
        ))}
      </div>
      </div>
      <div>
        <About/>
      </div>
    </div>
  );
}

export default App;
