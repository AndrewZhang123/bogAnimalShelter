import React from 'react';
import "./App.css";

function Nav() {

  return (
    <div className='nav'>
      <h1>Drew's Animal Shelter</h1>
      <ul>
        <li>About</li>
        <li className='adopt'>Adopt a pet!</li>
      </ul>
    </div>
  );
};

export default Nav;