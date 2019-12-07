import React, { useContext } from 'react';
import './App.css';
import Nav from './Nav';
import Dogs from './Dogs';
import Cats from './Cats';
import { CatsProvider } from './CatsContext';
import { DogsProvider } from './DogsContext';
import About from './About';


function App(props) {

  return (
    <div className='page'>
      <div>
        <Nav />
      </div>
      <div>
        <DogsProvider>
          <Dogs />
        </DogsProvider>
        <CatsProvider>
          <Cats />
        </CatsProvider>
      </div>
      <div>
        <About />
      </div>
    </div >
  )
};

export default App;
